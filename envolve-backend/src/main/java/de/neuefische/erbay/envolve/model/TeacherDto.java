package de.neuefische.erbay.envolve.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@NotEmpty
public class TeacherDto {

    @Size(min = 5, message = "user mind length 5")
    private String username;
    @Size(min = 5, message = "password min length 5")
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}
