package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Data
@AllArgsConstructor
@NoArgsConstructor
@NotEmpty
@Document(collection = "teacher")
public class Teacher {

    @Size(min = 5, message = "username min length 5")
    @Id
    private String username;
    @Size(min = 5, message = "password min length 5")
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}
