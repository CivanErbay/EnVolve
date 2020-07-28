package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import de.neuefische.erbay.envolve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public String register (@RequestBody TeacherRegisterDto teacherRegisterDto) throws ExecutionException, InterruptedException {
        Teacher registeredTeacher = userService.register(teacherRegisterDto);
        LoginDto logindata = new LoginDto();
        logindata.setUsername(registeredTeacher.getUsername());
        logindata.setPassword(registeredTeacher.getPassword());
        return userService.login(logindata);
    }

    @PostMapping("/login")
    public String login (@RequestBody LoginDto loginDto) throws ExecutionException, InterruptedException {
        return userService.login(loginDto);
    }
}
