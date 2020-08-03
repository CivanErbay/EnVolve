package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewSurvey {


    private String id;
    private String schoolClassId;
    private List<Question> questionList;
    private boolean active;
    private String localDate;

    public boolean getActive() {
        return active;
    }
}
