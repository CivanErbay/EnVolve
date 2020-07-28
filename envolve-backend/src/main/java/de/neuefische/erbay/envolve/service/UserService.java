package de.neuefische.erbay.envolve.service;
import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {

    private final TeacherDb teacherDb;
    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    @Autowired
    public UserService(TeacherDb teacherDb, AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.teacherDb = teacherDb;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    public Teacher register (TeacherRegisterDto data) {
        de.neuefische.erbay.envolve.model.Teacher teacher = new Teacher();
        teacher.setUsername(data.getUsername());
        String encodedPw = encoder.encode(data.getPassword());
        teacher.setPassword(encodedPw);
        teacher.setFirstname(data.getFirstname());
        teacher.setLastname(data.getLastname());
        teacher.setEmail(data.getEmail());

      return teacherDb.save(teacher);
    }

    public String login(String username, String password) {

        //Checks the Firebase DB with username/password - Authenticationmanager is also connected to TeacherDB (dont worry)
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        //Gets teacher out of Backend (if authentication fails
        Optional<Teacher> tmpTeacher = teacherDb.findById(username);

        if (tmpTeacher.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Teacher teacher = tmpTeacher.get();

        return jwtUtils.createToken(new HashMap<>(Map.of("firstname", teacher.getFirstname(), "lastname", teacher.getLastname())), teacher.getUsername());
    }
}
