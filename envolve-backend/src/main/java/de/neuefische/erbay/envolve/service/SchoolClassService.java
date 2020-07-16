package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.SchoolClassDb;
import de.neuefische.erbay.envolve.model.SchoolClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SchoolClassService {

    private final SchoolClassDb schoolClassDb;

    @Autowired
    public SchoolClassService(SchoolClassDb schoolClassDb) {
        this.schoolClassDb = schoolClassDb;
    }

    public void addClass(SchoolClass schoolClass) {
    schoolClassDb.save(schoolClass);
    }

    public List<SchoolClass> getClassesById(String teacher) {
       return schoolClassDb.findByTeacher(teacher);
    }
}

