package de.neuefische.erbay.envolve.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {

    private final JWTUtils jwtUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();



    public FirebaseService(JWTUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    public Teacher register (TeacherRegisterDto data) {
        Firestore dbFireStore = FirestoreClient.getFirestore();

        Teacher teacher = new Teacher();
        teacher.setUsername(data.getUsername());
        String encodedPw = encoder.encode(data.getPassword());
        teacher.setPassword(encodedPw);
        teacher.setFirstname(data.getFirstname());
        teacher.setLastname(data.getLastname());
        teacher.setEmail(data.getEmail());



        dbFireStore.collection("teacher").document(teacher.getUsername()).set(teacher);
        return teacher;
    }

    public String login(@RequestBody LoginDto data) throws ExecutionException, InterruptedException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFireStore.collection("teacher").document(data.getUsername());
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Teacher tmpTeacher;

        if (document.exists()) {
           tmpTeacher = document.toObject(Teacher.class);
        }
        else{
            return null;
        }
        assert tmpTeacher != null;

/*
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(tmpTeacher.getUsername(), tmpTeacher.getPassword()));
*/

        return jwtUtils.createToken(new HashMap<>(Map.of("firstname", tmpTeacher.getFirstname(),"lastname", tmpTeacher.getLastname())), tmpTeacher.getUsername());
    }
}
