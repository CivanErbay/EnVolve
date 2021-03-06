package de.neuefische.erbay.envolve.model.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeacherRegisterDto {

/*
    @Size(min = 5, message = "user mind length 5")
*/
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}
