package de.neuefische.erbay.envolve.model.dto;

import de.neuefische.erbay.envolve.model.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SurveyAnswerDto {


    private String schoolClassId;
    private String studentCode;
    private List<Question> questionList;

}
