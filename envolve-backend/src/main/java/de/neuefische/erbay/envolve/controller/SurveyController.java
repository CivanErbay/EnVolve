package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Question;
import de.neuefische.erbay.envolve.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/survey")
@RestController
public class SurveyController {

    private final SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @PostMapping
    public void addQuestion (Question question) {
        surveyService.addQuestion(question);
    }
}
