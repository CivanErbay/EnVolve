package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class TokenService {

    private final JWTUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final TeacherDb teacherDb;


    public TokenService(JWTUtils jwtUtils, AuthenticationManager authenticationManager, TeacherDb teacherDb) {
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.teacherDb = teacherDb;
    }


    public String getToken(@RequestBody LoginDto teacher) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(teacher.getUsername(), teacher.getPassword()));
        final Optional<Teacher> tempTeacher = teacherDb.findById(teacher.getUsername());
        return jwtUtils.createToken(new HashMap<>(Map.of("firstname", tempTeacher.get().getFirstname(),"lastname", tempTeacher.get().getLastname())), teacher.getUsername());
    }


}
