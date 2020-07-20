package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.SchoolClass;
import de.neuefische.erbay.envolve.model.dto.AddSchoolClassDto;
import de.neuefische.erbay.envolve.service.SchoolClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;
import java.util.Optional;


@RequestMapping("/api/classes")
@RestController
public class SchoolClassController {

    private final SchoolClassService schoolClassService;

    @Autowired
    public SchoolClassController(SchoolClassService schoolClassService) {
        this.schoolClassService = schoolClassService;
    }

    @PostMapping
    public void addClass(@RequestBody @Valid AddSchoolClassDto tempSchoolClass, Principal teacher){
        String teacherName = teacher.getName();
        schoolClassService.addClass(tempSchoolClass, teacherName);
    };

    @GetMapping("{teacher}")
    public List<SchoolClass> getClassesByTeacher(@PathVariable String teacher){
      return schoolClassService.getClassesByTeacher(teacher);
    }

    @GetMapping("/class/{id}")
    public SchoolClass getClassById(@PathVariable String id) {
        Optional<SchoolClass> tempSchoolClass = schoolClassService.getClassById(id);
        if (tempSchoolClass.isPresent()) {
            return tempSchoolClass.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Schoolclass with " + id + " not exists");
    }
}
