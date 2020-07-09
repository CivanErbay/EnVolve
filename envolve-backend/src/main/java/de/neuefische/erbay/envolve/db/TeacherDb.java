package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.Teacher;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TeacherDb extends PagingAndSortingRepository<Teacher,String> {
}
