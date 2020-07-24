package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.NewSurveyDb;
import de.neuefische.erbay.envolve.model.NewSurvey;
import de.neuefische.erbay.envolve.model.dto.NewSurveyDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class SurveyService {

    private NewSurveyDb newSurveyDb;


    @Autowired
    public SurveyService(NewSurveyDb newSurveyDb) {
        this.newSurveyDb = newSurveyDb;

    }

    public void addNewSurvey (NewSurveyDto newSurveyDto) {
        NewSurvey newSurvey = new NewSurvey();
        newSurvey.setSchoolClassId(newSurveyDto.getSchoolClassId());
        newSurvey.setSurveyList(newSurveyDto.getSurveyList());
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

}
