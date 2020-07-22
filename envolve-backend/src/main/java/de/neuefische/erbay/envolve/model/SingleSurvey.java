package de.neuefische.erbay.envolve.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "singlesurvey")
public class SingleSurvey {

    private String id;
    private String studentId;
    private List<Question> questionList;

}
