package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.Survey;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SurveyDb extends PagingAndSortingRepository<Survey, String> {
}
