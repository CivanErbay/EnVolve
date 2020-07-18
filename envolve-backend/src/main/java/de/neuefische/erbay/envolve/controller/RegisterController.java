package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import de.neuefische.erbay.envolve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/register")
@RestController
public class RegisterController {

    private final UserService userService;
    private final AuthController authController;

    @Autowired
    public RegisterController(UserService userService, AuthController authController) {
        this.userService = userService;
        this.authController = authController;
    }

    @PostMapping
    public String register(@RequestBody TeacherRegisterDto data) {
        userService.register(data);
        LoginDto loginData = new LoginDto();
        loginData.setPassword(data.getPassword());
        loginData.setUsername(data.getUsername());
        return authController.login(loginData);
    }

}
