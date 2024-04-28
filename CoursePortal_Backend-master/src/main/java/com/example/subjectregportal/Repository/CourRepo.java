package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.AddCourse;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CourRepo extends JpaRepository<AddCourse, Long> {

}
