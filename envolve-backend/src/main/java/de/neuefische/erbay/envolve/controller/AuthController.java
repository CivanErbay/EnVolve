package de.neuefische.erbay.envolve.controller;


import de.neuefische.erbay.envolve.model.Teacher;

import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.service.TokenService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RequestMapping("auth/login")
@RestController
public class AuthController {



    private final TokenService tokenService;

    public AuthController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping
    public String login(@RequestBody Teacher teacher) {
        try {
            return tokenService.getToken(teacher);
            //Optional tempTeacher to store firstname and lastname of the currently logged in Teacher into the generated token.
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }

}
