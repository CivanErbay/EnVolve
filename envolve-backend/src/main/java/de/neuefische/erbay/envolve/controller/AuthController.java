package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.TeacherDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RequestMapping("auth/login")
@RestController
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    private final TeacherDb teacherDb;

    public AuthController(AuthenticationManager authenticationManager, JWTUtils jwtUtils, TeacherDb teacherDb) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.teacherDb = teacherDb;
    }

    @PostMapping
    public String login(@RequestBody Teacher teacher) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(teacher.getUsername(), teacher.getPassword()));
            final Optional<Teacher> tempTeacher = teacherDb.findById(teacher.getUsername());
            return jwtUtils.createToken(new HashMap<>(Map.of("firstname", tempTeacher.get().getFirstname(),"lastname", tempTeacher.get().getLastname())), teacher.getUsername());
            //Optional tempTeacher to store firstname and lastname of the currently logged in Teacher into the generated token.
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }
}
