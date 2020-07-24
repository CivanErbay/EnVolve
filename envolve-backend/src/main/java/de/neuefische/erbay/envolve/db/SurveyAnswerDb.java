package de.neuefische.erbay.envolve.db;

import de.neuefische.erbay.envolve.model.SurveyAnswer;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalDate;
import java.util.List;

public interface SurveyAnswerDb extends PagingAndSortingRepository<SurveyAnswer, String> {
    List<SurveyAnswer> findBySchoolClassIdAndLocalDateBetween(String schoolClassId, LocalDate localDate, LocalDate localDate2);
    List<SurveyAnswer> findBySchoolClassId(String schoolClassId);
}
