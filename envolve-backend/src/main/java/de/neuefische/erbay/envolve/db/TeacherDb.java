package de.neuefische.erbay.envolve.db;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.Teacher;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class TeacherDb  {

    private final String collection = "teacher";

    public Teacher save (Teacher teacher) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(teacher.getUsername()).set(teacher);
        return teacher;
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
