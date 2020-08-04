package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.NewSurveyDb;
import de.neuefische.erbay.envolve.db.SchoolClassDb;
import de.neuefische.erbay.envolve.db.SurveyAnswerDb;
import de.neuefische.erbay.envolve.model.NewSurvey;
import de.neuefische.erbay.envolve.model.Question;
import de.neuefische.erbay.envolve.model.SchoolClass;
import de.neuefische.erbay.envolve.model.SurveyAnswer;
import de.neuefische.erbay.envolve.model.dto.NewSurveyDto;
import de.neuefische.erbay.envolve.model.dto.SurveyAnswerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Service
public class SurveyService {

    private final NewSurveyDb newSurveyDb;
    private final SurveyAnswerDb surveyAnswerDb;
    private final SchoolClassService schoolClassService;
    private final SchoolClassDb schoolClassDb;


    @Autowired
    public SurveyService(NewSurveyDb newSurveyDb, SurveyAnswerDb surveyAnswerDb, SchoolClassService schoolClassService, SchoolClassDb schoolClassDb) {
        this.newSurveyDb = newSurveyDb;
        this.surveyAnswerDb = surveyAnswerDb;
        this.schoolClassService = schoolClassService;
        this.schoolClassDb = schoolClassDb;
    }

    public void addNewSurvey(NewSurveyDto newSurveyDto) {
        //get all "Old" NewSurveys
        String schoolClassId = newSurveyDto.getSchoolClassId();
        List<NewSurvey> outDatedNewSurveys = newSurveyDb.findByNewSurveysBySchoolClassId(schoolClassId);

        //Set all "old" NewSurvey active: false and save them in DB
        for (int i = 0; i < outDatedNewSurveys.size(); i++) {
            outDatedNewSurveys.get(i).setActive(false);
            newSurveyDb.save(outDatedNewSurveys.get(i));
        }

        //Create newSurvey
        NewSurvey newSurvey = new NewSurvey();
        newSurvey.setSchoolClassId(newSurveyDto.getSchoolClassId());
        newSurvey.setId(UUID.randomUUID().toString());

        //Create QuestionList out of Stringlistfrom newSurveyDto
        List<Question> surveyList = new ArrayList<>();
        List<String> tempList = newSurveyDto.getQuestionList();
        for (int i = 0; i < newSurveyDto.getQuestionList().size(); i++) {
            Question tempQuestion = new Question();
            tempQuestion.setQuestionText(tempList.get(i));
            tempQuestion.setKeyWord(tempList.get(i));
            tempQuestion.setResponse(0);
            surveyList.add(tempQuestion);
        }
        newSurvey.setQuestionList(surveyList);

        //format Date to String to make it fitting into firebase DB
        LocalDate localDate = LocalDate.now(); //For reference
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd LLLL yyyy");
        String formattedString = localDate.format(formatter);

        newSurvey.setLocalDate(formattedString);
        newSurvey.setActive(true);
        newSurveyDb.save(newSurvey);
    }

/*    public NewSurvey getNewSurvey(String schoolClassId) {

        Optional<NewSurvey> tempNewSurvey = newSurveyDb.findById(schoolClassId);
        if (tempNewSurvey.isPresent()) {
            return tempNewSurvey.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Survey with " + schoolClassId + " not found)");
    }*/

    public NewSurvey getActiveNewSurvey (String schoolClassId) {
        //Gets list of all NewSurveys of a single Class
        List<NewSurvey> fullNewSurveyList = newSurveyDb.findByNewSurveysBySchoolClassId(schoolClassId);
        NewSurvey responseSurvey = new NewSurvey();

        //Looks for the survey with active status and sets it to responseSurvey, which is getting returned
        for (int i = 0; i < fullNewSurveyList.size(); i++) {
             boolean activeCheck = fullNewSurveyList.get(i).getActive();
             if(activeCheck) {
                 responseSurvey.setSchoolClassId(fullNewSurveyList.get(i).getSchoolClassId());
                 responseSurvey.setQuestionList(fullNewSurveyList.get(i).getQuestionList());
                 responseSurvey.setLocalDate(fullNewSurveyList.get(i).getLocalDate());
                 return responseSurvey;
             }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No active survey found)");

    }


    //THIS METHOD GETS CALLED BY getNewSurveyFiltered to get the schoolClassId (because student can only paste his code, not the Id)
  public String getSchoolClassIdByStudentCode (String studentCode) {
      List<SchoolClass> allClasses = schoolClassDb.getAllClasses();
      for (int i = 0; i < allClasses.size(); i++) {
          SchoolClass singleClass = allClasses.get(i);
          for (int i1 = 0; i1 < allClasses.get(i).getClassmembers().size(); i1++) {
              if (studentCode.equals(singleClass.getClassmembers().get(i1).getCode()))
              {
                return singleClass.getId();
              }
          }
      }
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Couldnt find any Class with this Code");
  }

    //SurveyAnswer Method which is called by Frontend
    public NewSurvey getNewSurveyFiltered( String studentCode) {

        //This Method IS BROKEN, Or not?!!!
        String schoolClassId = getSchoolClassIdByStudentCode(studentCode);



        //Check if StudentCode is valid //if student is member of Class
        SchoolClass currentSchoolClass = schoolClassService.getClassById(schoolClassId);

        for (int i = 0; i < currentSchoolClass.getClassmembers().size(); i++) {
            if (currentSchoolClass.getClassmembers().get(i).getCode().equals(studentCode)) {
                //check if StudentCode is already used for this survey
                List<SurveyAnswer> allSurveyAnswerListByClassId = getAllSurveyAnswerListByClassId(schoolClassId);
                for (int j = 0; j < allSurveyAnswerListByClassId.size(); j++) {
                    if (allSurveyAnswerListByClassId.get(j).getStudentCode().equals(studentCode)) {
                        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Student with " + studentCode + " finished his survey already");
                    }


                }
                return getActiveNewSurvey(schoolClassId);
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Student with " + studentCode + " is not member of this class");

    }

    //Method which is called after user(student) replied to getNewSurveyFiltered
    public void addSurveyAnswer(SurveyAnswerDto surveyAnswerDto) {
        SurveyAnswer surveyAnswer = new SurveyAnswer();
        //ACHTUNG: SLOW METHOD
        String schoolClassId = getSchoolClassIdByStudentCode(surveyAnswerDto.getStudentCode());

        surveyAnswer.setSchoolClassId(schoolClassId);
        surveyAnswer.setStudentCode(surveyAnswerDto.getStudentCode());
        surveyAnswer.setQuestionList(surveyAnswerDto.getQuestionList());

        //Check if StudentCode used already - Put this in getNewSurveyFiltered later
        //DEACTIVATED TO FILL DATABASE WITH MORE DATA OVER A LONGER PERIOD TO FILL DASHBOARD
 /*       List<SurveyAnswer> allSurveyAnswerListByClassId = getAllSurveyAnswerListByClassId( schoolClassId);
        for (int j = 0; j < allSurveyAnswerListByClassId.size(); j++) {
            if (allSurveyAnswerListByClassId.get(j).getStudentCode().equals(surveyAnswerDto.getStudentCode())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Student with " + surveyAnswerDto.getStudentCode() + " finished his survey already");
            }
        } */
        LocalDate localDate = LocalDate.now();//For reference
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd LLLL yyyy");
        String formattedString = localDate.format(formatter);

        surveyAnswer.setLocalDate(formattedString);
        surveyAnswerDb.save(surveyAnswer);
    }

    public List<SurveyAnswer> getAllSurveyAnswerListByClassId(String schoolClassId) {
        return surveyAnswerDb.findBySchoolClassId(schoolClassId);
    }


    public List<SurveyAnswer> getSurveyAnswerListFilteredByDate(String schoolClassId) {
        //Get all surveys from specific schoolClass
        List<SurveyAnswer> allSurveyAnswersBySchoolClass = surveyAnswerDb.findBySchoolClassId(schoolClassId);

        //Get CreationDate of latest Survey
        NewSurvey newSurvey = getActiveNewSurvey(schoolClassId);
        String surveyCreationDate = newSurvey.getLocalDate();

        //Format String Date back to LocalDate-Format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE, d MMM yyyy", Locale.ENGLISH);
        LocalDate dateTime = LocalDate.parse(surveyCreationDate, formatter);

        //Filter all surveys by date - all surveys bigger than creationDate (of newSurvey)
        List<SurveyAnswer> filteredAnswerList = new ArrayList<>();
        for (int i = 0; i < allSurveyAnswersBySchoolClass.size(); i++) {
            String answerLocalDate = allSurveyAnswersBySchoolClass.get(i).getLocalDate();
            LocalDate localDateAnswer = LocalDate.parse(answerLocalDate, formatter);

            if (localDateAnswer.compareTo(dateTime) >= 0) {
                filteredAnswerList.add(allSurveyAnswersBySchoolClass.get(i));
            }
        }
        return filteredAnswerList;
    }


}
