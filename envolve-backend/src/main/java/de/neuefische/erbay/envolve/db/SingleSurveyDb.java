package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.SingleSurvey;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SingleSurveyDb extends PagingAndSortingRepository<SingleSurvey,String> {
}
