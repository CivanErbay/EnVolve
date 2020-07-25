package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "surveyanswer" )
public class SurveyAnswer {

    @Id
    private String id;
    private String schoolClassId;
    private String studentCode;
    private List<Question> questionList;
    private LocalDate localDate;


}
