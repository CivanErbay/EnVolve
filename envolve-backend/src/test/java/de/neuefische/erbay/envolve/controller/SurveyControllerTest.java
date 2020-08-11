/*
package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.db.SurveyAnswerDb;
import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Question;
import de.neuefische.erbay.envolve.model.SurveyAnswer;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)


    //NOT WORKING BECAUSE TEST CANNOT FIND serviceAccount.json from firebase



public class SurveyControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private SurveyAnswerDb surveyAnswerDb;
    private TeacherDb teacherDb;

    @Autowired
    private JWTUtils jwtUtils;


    private String loginUser() {
        String savePassword = "123";
        Teacher teacher = new Teacher("testuser", passwordEncoder.encode(savePassword),"testfirst", "testlast", "testmail");
        teacherDb.save(teacher);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginDto("test", "123"), String.class);
        return tokenResponse.getBody();
    }

    @Test
    public void getAllSurveyAnswersShouldReturnAllSurveyAnswers() {
        //GIVEN
        String token = loginUser();

        List<Question> testQuestionList = new ArrayList(List.of("How are you?", "mood", 3));

                String url = "http://localhost:" + port + "/api/ideas";
        surveyAnswerDb.save(new SurveyAnswer("1", "12345", "321", testQuestionList, "1.2.1990"));


        //WHEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<SurveyAnswer[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, SurveyAnswer[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        SurveyAnswer[] surveyAnswers = response.getBody();
        assertEquals(surveyAnswers.length, 2);
        assertEquals(surveyAnswers[0], new SurveyAnswer("1", "12345", "321", testQuestionList, "1.2.1990"));
    }
}
*/
