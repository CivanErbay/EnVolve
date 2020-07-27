package de.neuefische.erbay.envolve.service;
import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.concurrent.ExecutionException;

@Service
public class UserService {

    private final TeacherDb teacherDb;


    @Autowired
    public UserService(TeacherDb teacherDb) {
        this.teacherDb = teacherDb;
    }

    public Teacher register (TeacherRegisterDto data) {
      return teacherDb.register(data);
    }

    public String login(@RequestBody LoginDto data) throws ExecutionException, InterruptedException {
        return teacherDb.login(data);
    }
}
