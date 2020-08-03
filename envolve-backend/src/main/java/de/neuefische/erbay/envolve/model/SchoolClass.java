package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
/*
import org.springframework.data.mongodb.core.mapping.Document;
*/

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
/*
@Document(collection = "class")
*/
public class SchoolClass {

    @Id
    private String id;
    private String teacher;
    private String classname;
    private List<Student> classmembers;
}
