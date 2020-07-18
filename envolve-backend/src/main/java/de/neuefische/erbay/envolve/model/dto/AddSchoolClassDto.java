package de.neuefische.erbay.envolve.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddSchoolClassDto {

    private String classname;
    private List<String> classmembers;

}
