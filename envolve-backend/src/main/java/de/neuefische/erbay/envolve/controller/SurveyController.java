package de.neuefische.erbay.envolve.controller;
import de.neuefische.erbay.envolve.model.NewSurvey;
import de.neuefische.erbay.envolve.model.SurveyAnswer;
import de.neuefische.erbay.envolve.model.dto.NewSurveyDto;
import de.neuefische.erbay.envolve.model.dto.SurveyAnswerDto;
import de.neuefische.erbay.envolve.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{studentCode}")
    public NewSurvey getNewSurveyWithStudentCodeCheck (@PathVariable String studentCode ) {
        return surveyService.getNewSurveyFiltered(studentCode);
    }

    @PostMapping("/feedback")
    public void addSurveyAnswer(@RequestBody SurveyAnswerDto surveyAnswerDto) {
        surveyService.addSurveyAnswer(surveyAnswerDto);
    }

    @GetMapping("/feedback/all/{schoolClassId}")
    public List<SurveyAnswer> getAllSurveyAnswerListByClassId(@PathVariable String schoolClassId) {
        return surveyService.getAllSurveyAnswerListByClassId(schoolClassId);
    }

    @GetMapping("/feedback/{schoolClassId}")
    public List<SurveyAnswer> getFilteredSurveyAnswerList(@PathVariable String schoolClassId) {
        return surveyService.getSurveyAnswerListFilteredByDate(schoolClassId);
    }

   @DeleteMapping("/clear/{schoolClassId}")
       public void clearSurveyBySchoolClassId(@PathVariable String schoolClassId) {
        surveyService.clearSurveyBySchoolClassId(schoolClassId);
   }

}
