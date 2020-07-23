package de.neuefische.erbay.envolve.model;

import de.neuefische.erbay.envolve.model.SingleSurvey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "survey")
public class Survey {

    private String id;
    private String classId;
    private List<SingleSurvey> surveyList;

}
