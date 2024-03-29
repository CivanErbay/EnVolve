package de.neuefische.erbay.envolve.db;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.NewSurvey;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class NewSurveyDb  {

    private final String collection = "newsurvey";


    //Not working - newSurvey does not getting transferred to firebase
    public void save(NewSurvey newSurvey) {

        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(newSurvey.getId()).set(newSurvey);

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

    // FIND CLASSES BY TEACHER
    public List<NewSurvey> findByNewSurveysBySchoolClassId(String schoolClassId) {
        try {
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<QuerySnapshot> tempSchoolClasses = dbFireStore.collection(collection).whereEqualTo("schoolClassId", schoolClassId).get();
            List<QueryDocumentSnapshot> documents = tempSchoolClasses.get().getDocuments();
            return documents.stream().map(document -> document.toObject(NewSurvey.class)).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("failed to get NewSurveys", e);
        }
    }
}


