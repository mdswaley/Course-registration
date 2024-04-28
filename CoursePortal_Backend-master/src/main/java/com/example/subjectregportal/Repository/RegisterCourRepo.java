package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.CourseRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterCourRepo extends JpaRepository<CourseRegistration,Long> {
}
