package de.neuefische.erbay.envolve.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;





@Data
@AllArgsConstructor
@NoArgsConstructor
/*@Document(collection = "teacher")*/
public class Teacher {

    @Id
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}
