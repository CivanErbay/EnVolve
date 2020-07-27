package de.neuefische.erbay.envolve.db;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.NewSurvey;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class NewSurveyDb  {

    private final String collection = "newsurvey";


    public void save(NewSurvey newSurvey) {
        if (newSurvey.getSchoolClassId() == null) {
            newSurvey.setSchoolClassId(UUID.randomUUID().toString());
        }
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> set = dbFireStore.collection(collection).document(newSurvey.getSchoolClassId()).set(newSurvey);
        System.out.println(set);
    }


    public void deleteById(String schoolClassId) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(schoolClassId).delete();
    }

    public Optional<NewSurvey> findById(String schoolClassId) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        try {
            DocumentSnapshot documentSnapshot = dbFireStore.collection(collection).document(schoolClassId).get().get();

            if (documentSnapshot.exists()) {
                return Optional.of(documentSnapshot.toObject(NewSurvey.class));
            } else {
                return Optional.empty();
            }
        } catch (Exception e) {
            throw new RuntimeException("failed to get newSurvey", e);
        }

    }
}
