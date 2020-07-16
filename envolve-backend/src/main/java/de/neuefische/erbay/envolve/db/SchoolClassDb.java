package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.SchoolClass;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface SchoolClassDb extends PagingAndSortingRepository<SchoolClass, String> {

    List<SchoolClass> findByTeacher(String teacher);

}
