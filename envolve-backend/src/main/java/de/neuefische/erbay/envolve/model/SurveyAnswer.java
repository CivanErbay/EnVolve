package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "surveyanswer" )
public class SurveyAnswer {

    @Id
    private String id;
    private Student studentcode;
    private String classId;
    private List<Question> questionList;


}
