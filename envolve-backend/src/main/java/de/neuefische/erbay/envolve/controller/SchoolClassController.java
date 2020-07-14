package de.neuefische.erbay.envolve.controller;

import de.neuefische.erbay.envolve.model.SchoolClass;
import de.neuefische.erbay.envolve.service.SchoolClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/classes")
@RestController
public class SchoolClassController {

    private final SchoolClassService schoolClassService;

    @Autowired
    public SchoolClassController(SchoolClassService schoolClassService) {
        this.schoolClassService = schoolClassService;
    }

    @PostMapping
    public void addClass(@RequestBody SchoolClass schoolClass){
        schoolClassService.addClass(schoolClass);
    };

    @GetMapping
    public Iterable<SchoolClass> getClasses(){
        return schoolClassService.getClasses();
    }

}
