package de.neuefische.erbay.envolve.service;

import de.neuefische.erbay.envolve.db.SchoolClassDb;
import de.neuefische.erbay.envolve.model.SchoolClass;
import de.neuefische.erbay.envolve.model.Student;
import de.neuefische.erbay.envolve.model.dto.AddSchoolClassDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


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
            String code = "123";
            Student singleClassmember = new Student(singleClassmemberName,code);
            tempList.add(singleClassmember);
        }


        schoolClass.setClassmembers(tempList);
        schoolClass.setClassname(tempSchoolClass.getClassname());
    schoolClassDb.save(schoolClass);
    }

    public List<SchoolClass> getClassesById(String teacher) {
       return schoolClassDb.findByTeacher(teacher);
    }
}

