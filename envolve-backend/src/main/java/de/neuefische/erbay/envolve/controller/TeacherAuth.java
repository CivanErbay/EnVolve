package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Teacher;
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


@RequestMapping("auth/login")
@RestController
public class TeacherAuth {

    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;

    public TeacherAuth(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping
    public String login(@RequestBody Teacher teacher) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(teacher.getUserName(), teacher.getPassword()));
            return jwtUtils.createToken(new HashMap<>(), teacher.getUserName());

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }

    }
}
