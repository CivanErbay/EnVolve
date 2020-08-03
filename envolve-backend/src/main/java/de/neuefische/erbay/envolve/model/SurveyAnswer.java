package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class SurveyAnswer {


    private String id;
    private String schoolClassId;
    private String studentCode;
    private List<Question> questionList;
    private String localDate;


}
