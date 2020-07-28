package de.neuefische.erbay.envolve.db;


import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.Teacher;
import de.neuefische.erbay.envolve.model.dto.LoginDto;
import de.neuefische.erbay.envolve.security.JWTUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Repository
public class TeacherDb  {

    private final String collection = "teacher";
    private final JWTUtils jwtUtils;



    public TeacherDb(JWTUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    public Teacher register (Teacher teacher) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(teacher.getUsername()).set(teacher);
        return teacher;
    }

    public String login(@RequestBody LoginDto data) throws ExecutionException, InterruptedException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFireStore.collection(collection).document(data.getUsername());
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


    public Optional<Teacher> findById (String username ) {
        Firestore dbFireStore = FirestoreClient.getFirestore();

        try {
            DocumentSnapshot documentSnapshot = dbFireStore.collection(collection).document(username).get().get();

            if (documentSnapshot.exists()) {
                return Optional.of(documentSnapshot.toObject(Teacher.class));
            } else {
                return Optional.empty();
            }
        } catch (Exception e) {
            throw new RuntimeException("failed to find Teacher", e);
        }
    }


}
