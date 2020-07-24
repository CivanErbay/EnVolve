package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.NewSurveyDb;
import de.neuefische.erbay.envolve.db.SurveyAnswerDb;
import de.neuefische.erbay.envolve.model.NewSurvey;
import de.neuefische.erbay.envolve.model.SurveyAnswer;
import de.neuefische.erbay.envolve.model.dto.NewSurveyDto;
import de.neuefische.erbay.envolve.model.dto.SurveyAnswerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    private final NewSurveyDb newSurveyDb;
    private final SurveyAnswerDb surveyAnswerDb;


    @Autowired
    public SurveyService(NewSurveyDb newSurveyDb, SurveyAnswerDb surveyAnswerDb) {
        this.newSurveyDb = newSurveyDb;
        this.surveyAnswerDb = surveyAnswerDb;
    }

    public void addNewSurvey (NewSurveyDto newSurveyDto) {
        newSurveyDb.deleteById(newSurveyDto.getSchoolClassId());
        NewSurvey newSurvey = new NewSurvey();
        newSurvey.setSchoolClassId(newSurveyDto.getSchoolClassId());
        newSurvey.setQuestionList(newSurveyDto.getQuestionList());
        newSurvey.setLocalDate(LocalDate.now());
        newSurvey.setActive(true);
        newSurveyDb.save(newSurvey);
    }

    public NewSurvey getNewSurvey (String schoolClassId){
        Optional<NewSurvey> tempNewSurvey = newSurveyDb.findById(schoolClassId);
        if(tempNewSurvey.isPresent()) {
            return tempNewSurvey.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Survey with " + schoolClassId + " not found)");
    }

    public void addSurveyAnswer (SurveyAnswerDto surveyAnswerDto) {
        SurveyAnswer surveyAnswer = new SurveyAnswer();
        surveyAnswer.setSchoolClassId(surveyAnswerDto.getSchoolClassId());
        surveyAnswer.setStudentCode(surveyAnswerDto.getStudentCode());
        surveyAnswer.setQuestionList(surveyAnswerDto.getQuestionList());
        surveyAnswer.setLocalDate(LocalDate.now());
        surveyAnswerDb.save(surveyAnswer);
    }

    public List<SurveyAnswer> getAllSurveyAnswerListByClassId(String schoolClassId){
        return surveyAnswerDb.findBySchoolClassId(schoolClassId);
    }

    public List<SurveyAnswer> getFilteredSurveyAnswerList (String schoolClassId) {
        NewSurvey newSurvey = getNewSurvey(schoolClassId);
        LocalDate oldDate = newSurvey.getLocalDate();
        LocalDate newDate = LocalDate.now();
        return surveyAnswerDb.findBySchoolClassIdAndLocalDateBetween(schoolClassId, oldDate, newDate);
    }

}
