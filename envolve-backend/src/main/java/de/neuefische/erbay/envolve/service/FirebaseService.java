package de.neuefische.erbay.envolve.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import de.neuefische.erbay.envolve.model.dto.TeacherRegisterDto;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {

    public String register (TeacherRegisterDto data) throws ExecutionException, InterruptedException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("teacher").document(data.getUsername().set(fields));
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
}
