package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import de.neuefische.erbay.envolve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;

@RestController
public class UserController {

    @Autowired
    private UserService userService;



    @PostMapping("auth/register")
    public Callable<String> register (@RequestBody TeacherRegisterDto teacherRegisterDto)  {
        userService.register(teacherRegisterDto);

        return new Callable<String>() {
            @Override
            public String call() throws Exception {
                Thread.sleep(5000);
                return userService.login(teacherRegisterDto.getUsername(), teacherRegisterDto.getPassword());
            }
        };

    }

    @PostMapping("auth/login")
    public String login (@RequestBody LoginDto loginDto) {
        return userService.login(loginDto.getUsername(), loginDto.getPassword());
    }



}

