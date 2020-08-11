package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TeacherDb teacherDb;

    @Autowired
    private JWTUtils jwtUtils;

   /* @BeforeEach
    public void resetDb() {
        teacherDb.deleteAll();
    }
    */


    @Test
    public void loginWithValidCredentials() {
        // GIVEN
        Teacher testTeacher = new Teacher("testuser", passwordEncoder.encode("123"), "testfirst", "testlast", "testmail");
        teacherDb.save(testTeacher);

        // WHEN
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> postResponse = restTemplate.postForEntity(url, new LoginDto("testuser", "123"), String.class);
        HttpStatus responseStatus = postResponse.getStatusCode();

        // THEN
        assertEquals(responseStatus, HttpStatus.OK);
        assertTrue(jwtUtils.validateToken(postResponse.getBody(), "test@test.de"));
    }
}
