package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final TeacherDb teacherDb;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(TeacherDb teacherDb) {
        this.teacherDb = teacherDb;
    }

    public void register(TeacherRegisterDto data) {

        Teacher teacher = new Teacher();
        teacher.setUsername(data.getUsername());
        String encodedPw = encoder.encode(data.getPassword());
        teacher.setPassword(encodedPw);
        teacher.setFirstname(data.getFirstname());
        teacher.setLastname(data.getLastname());
        teacher.setEmail(data.getEmail());
        teacherDb.save(teacher);
    }


}
