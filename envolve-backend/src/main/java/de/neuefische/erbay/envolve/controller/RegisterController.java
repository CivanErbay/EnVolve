package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/register")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void register(@RequestBody Teacher teacher) {
        userService.register(teacher);
    }

}
