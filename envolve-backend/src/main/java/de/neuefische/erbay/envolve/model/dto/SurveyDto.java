package de.neuefische.erbay.envolve.model.dto;

import de.neuefische.erbay.envolve.model.SingleSurvey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SurveyDto {

    private String id;
    private String classId;
    private List<SingleSurvey> surveyList;

}
