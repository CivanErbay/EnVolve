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
@Document(collection = "newsurvey")
public class NewSurvey {

    @Id
    private String schoolClassId;
    private List<Question> questionList;
    private boolean active;
    private LocalDate localDate;
}
