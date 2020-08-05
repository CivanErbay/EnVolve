package de.neuefische.erbay.envolve.model.dto;

import de.neuefische.erbay.envolve.model.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewSurveyDto {

    private String schoolClassId;
    private List<Question> questionList;

}
