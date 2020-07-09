package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.Student;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface StudentDb extends PagingAndSortingRepository<Student, String> {
}


