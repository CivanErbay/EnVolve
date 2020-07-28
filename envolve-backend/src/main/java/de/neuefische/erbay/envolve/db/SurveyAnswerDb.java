package de.neuefische.erbay.envolve.db;


import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.SurveyAnswer;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Repository
public class SurveyAnswerDb  {

    private final String collection = "surveyanswer";

    public List<SurveyAnswer> findBySchoolClassId(String schoolClassId) {
        try {
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<QuerySnapshot> tempSchoolClasses = dbFireStore.collection(collection).whereEqualTo("schoolClassId", schoolClassId).get();
            List<QueryDocumentSnapshot> documents = tempSchoolClasses.get().getDocuments();
            return documents.stream().map(document -> document.toObject(SurveyAnswer.class)).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("failed to get SurveyAnswer List", e);
        }
    }

    public void save(SurveyAnswer surveyAnswer) {
        if (surveyAnswer.getId() == null) {
            surveyAnswer.setId(UUID.randomUUID().toString());
        }
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(surveyAnswer.getId()).set(surveyAnswer);
    }
}
