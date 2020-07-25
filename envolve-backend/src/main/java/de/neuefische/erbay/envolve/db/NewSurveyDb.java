package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.NewSurvey;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NewSurveyDb extends PagingAndSortingRepository<NewSurvey, String> {
}
