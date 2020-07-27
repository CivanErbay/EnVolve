package de.neuefische.erbay.envolve.db;


import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.SchoolClass;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Repository
public class SchoolClassDb {

    private final String collection = "class";

    // FIND CLASSES BY TEACHER
    public List<SchoolClass> findByTeacher(String teacher) {
        try {
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<QuerySnapshot> tempSchoolClasses = dbFireStore.collection(collection).whereEqualTo("teacher", teacher).get();
            List<QueryDocumentSnapshot> documents = tempSchoolClasses.get().getDocuments();
            return documents.stream().map(document -> document.toObject(SchoolClass.class)).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("failed to get Schoolclass", e);
        }
    }


    // ADD METHOD
    public void save(SchoolClass schoolClass) {
        if (schoolClass.getId() == null) {
            schoolClass.setId(UUID.randomUUID().toString());
        }
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(schoolClass.getId()).set(schoolClass);
    }


    public Optional<SchoolClass> findById(String id) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        try {
            DocumentSnapshot documentSnapshot = dbFireStore.collection(collection).document(id).get().get();

            if (documentSnapshot.exists()) {
                return Optional.of(documentSnapshot.toObject(SchoolClass.class));
            } else {
                return Optional.empty();
            }
        } catch (Exception e) {
            throw new RuntimeException("failed to get Schoolclass", e);
        }

    }

    public void deleteById(String id) {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        dbFireStore.collection(collection).document(id).delete();
    }
}
