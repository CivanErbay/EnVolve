package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.NewSurveyDb;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    private final NewSurveyDb newSurveyDb;
    private final SurveyAnswerDb surveyAnswerDb;
    private final SchoolClassService schoolClassService;


    @Autowired
    public SurveyService(NewSurveyDb newSurveyDb, SurveyAnswerDb surveyAnswerDb, SchoolClassService schoolClassService) {
        this.newSurveyDb = newSurveyDb;
        this.surveyAnswerDb = surveyAnswerDb;
        this.schoolClassService = schoolClassService;
    }

    public void addNewSurvey(NewSurveyDto newSurveyDto) {
        newSurveyDb.deleteById(newSurveyDto.getSchoolClassId());
        NewSurvey newSurvey = new NewSurvey();
        newSurvey.setSchoolClassId(newSurveyDto.getSchoolClassId());

        //Create QuestionList out of Stringlistfrom newSurveyDto
        List<Question> surveyList = new ArrayList<>();
        List<String> tempList = newSurveyDto.getQuestionList();
        for (int i = 0; i < newSurveyDto.getQuestionList().size(); i++) {
            Question tempQuestion = new Question();
            tempQuestion.setQuestionText(tempList.get(i));
            tempQuestion.setResponse(0);
            surveyList.add(tempQuestion);
        }
        newSurvey.setQuestionList(surveyList);
        newSurvey.setLocalDate(LocalDate.now());
        newSurvey.setActive(true);
        newSurveyDb.save(newSurvey);
    }

    public NewSurvey getNewSurvey(String schoolClassId) {

        Optional<NewSurvey> tempNewSurvey = newSurveyDb.findById(schoolClassId);
        if (tempNewSurvey.isPresent()) {
            return tempNewSurvey.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Survey with " + schoolClassId + " not found)");
    }

    public NewSurvey getNewSurveyFiltered(String schoolClassId, String studentCode) {

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
                    return getNewSurvey(schoolClassId);
                }
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Student with " + studentCode + " is not member of this class");

    }


    public void addSurveyAnswer(SurveyAnswerDto surveyAnswerDto) {
        SurveyAnswer surveyAnswer = new SurveyAnswer();
        surveyAnswer.setSchoolClassId(surveyAnswerDto.getSchoolClassId());
        surveyAnswer.setStudentCode(surveyAnswerDto.getStudentCode());
        surveyAnswer.setQuestionList(surveyAnswerDto.getQuestionList());
        surveyAnswer.setLocalDate(LocalDate.now());
        surveyAnswerDb.save(surveyAnswer);
    }

    public List<SurveyAnswer> getAllSurveyAnswerListByClassId(String schoolClassId) {
        return surveyAnswerDb.findBySchoolClassId(schoolClassId);
    }


    public List<SurveyAnswer> getSurveyAnswerListFilteredByDate(String schoolClassId) {
        //Get all surveys from specific schoolClass
        List<SurveyAnswer> allSurveyAnswersBySchoolClass = surveyAnswerDb.findBySchoolClassId(schoolClassId);

        //Get CreationDate of latest Survey
        NewSurvey newSurvey = getNewSurvey(schoolClassId);
        LocalDate surveyCreationDate = newSurvey.getLocalDate();

        //Filter all surveys by date - all surveys bigger than creationDate (of newSurvey)
        List<SurveyAnswer> filteredAnswerList = new ArrayList<>();
        for (int i = 0; i < allSurveyAnswersBySchoolClass.size(); i++) {
            LocalDate answerLocalDate = allSurveyAnswersBySchoolClass.get(i).getLocalDate();
            if (answerLocalDate.compareTo(surveyCreationDate) >= 0) {
                filteredAnswerList.add(allSurveyAnswersBySchoolClass.get(i));
            }
        }
        return filteredAnswerList;
    }

    

        /*
        public List<SurveyAnswer> getFilteredSurveyAnswerList (String schoolClassId) {
            NewSurvey newSurvey = getNewSurvey(schoolClassId);
            LocalDate oldDate = newSurvey.getLocalDate();
            LocalDate newDate = LocalDate.now();
            return surveyAnswerDb.findBySchoolClassIdAndLocalDateGreaterThanEqualAndLocalDateLessThanEqual(schoolClassId, oldDate, newDate);
        }
    */

}
