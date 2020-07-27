package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.SchoolClassDb;
import de.neuefische.erbay.envolve.model.SchoolClass;
import de.neuefische.erbay.envolve.model.Student;
import de.neuefische.erbay.envolve.model.dto.AddSchoolClassDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SchoolClassService {

    private final SchoolClassDb schoolClassDb;

    @Autowired
    public SchoolClassService(SchoolClassDb schoolClassDb) {
        this.schoolClassDb = schoolClassDb;
    }

    public void addClass(AddSchoolClassDto tempSchoolClass, String teacherName) {
     SchoolClass schoolClass = new SchoolClass();
     List<Student> tempList = new ArrayList<>();

        List<String> studentNames = tempSchoolClass.getClassmembers();
        schoolClass.setTeacher(teacherName);

        for (int i = 0; i < studentNames.size(); i++) {
            String singleClassmemberName = tempSchoolClass.getClassmembers().get(i);
            int r = ((int) (Math.random() * (99999 - 10000)) + 10000);
            String code = r + "";
            Student singleClassmember = new Student(singleClassmemberName,code);
            tempList.add(singleClassmember);
        }
        schoolClass.setClassmembers(tempList);
        schoolClass.setClassname(tempSchoolClass.getClassname());

    schoolClassDb.save(schoolClass);
    }
    public List<SchoolClass> getClassesByTeacher(String teacher) {
       return schoolClassDb.findByTeacher(teacher);
    }

    public SchoolClass getClassById(String id) {
        Optional<SchoolClass> tempSchoolClass = schoolClassDb.findById(id);
        if (tempSchoolClass.isPresent()) {
            return tempSchoolClass.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Schoolclass with " + id + " not exists");

    }

    public void deleteClassById(String id) {
        schoolClassDb.deleteById(id);
    }
}

