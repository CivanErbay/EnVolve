package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
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

    public void register(Teacher teacher) {
        String encodedPw = encoder.encode(teacher.getPassword());
        teacher.setPassword(encodedPw);
        teacherDb.save(teacher);
    }
}
