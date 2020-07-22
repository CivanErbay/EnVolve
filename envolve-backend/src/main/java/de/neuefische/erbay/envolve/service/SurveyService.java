package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.QuestionDb;
import de.neuefische.erbay.envolve.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurveyService {

    private QuestionDb questionDb;


    @Autowired
    public SurveyService(QuestionDb questionDb) {
        this.questionDb = questionDb;

    }

    public void addQuestion (Question question) {
        questionDb.save(question);
    }
}
