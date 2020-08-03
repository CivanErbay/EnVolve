package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SchoolClass {


    private String id;
    private String teacher;
    private String classname;
    private List<Student> classmembers;
}
