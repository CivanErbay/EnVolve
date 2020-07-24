package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.NewSurvey;
import de.neuefische.erbay.envolve.model.dto.NewSurveyDto;
import de.neuefische.erbay.envolve.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/survey")
@RestController
public class SurveyController {

    private final SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @PostMapping
    public void addNewSurvey (@RequestBody NewSurveyDto newSurveyDto) {
        surveyService.addNewSurvey(newSurveyDto);
    }

    @GetMapping("/{schoolClassId}")
    public NewSurvey getNewSurvey (@PathVariable String schoolClassId) {
        return surveyService.getNewSurvey(schoolClassId);
    }

}
