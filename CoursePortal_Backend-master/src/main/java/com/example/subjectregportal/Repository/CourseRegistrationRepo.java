package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.CourseRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRegistrationRepo extends JpaRepository<CourseRegistration,Long> {
    List<CourseRegistration> findByStudentId(Long studentId);
}
