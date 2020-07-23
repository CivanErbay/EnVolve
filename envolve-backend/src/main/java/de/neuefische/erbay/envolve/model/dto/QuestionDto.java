package de.neuefische.erbay.envolve.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDto {

    private String id;
    private String studentId;
    private String question;
    private int response;


}
