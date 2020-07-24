package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.SurveyAnswer;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SurveyAnswerDb extends PagingAndSortingRepository<SurveyAnswer, String> {
}
