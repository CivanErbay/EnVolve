package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionDb extends PagingAndSortingRepository<Question, String> {
}
