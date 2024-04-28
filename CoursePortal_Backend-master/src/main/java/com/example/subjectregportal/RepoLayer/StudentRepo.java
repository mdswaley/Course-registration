package com.example.subjectregportal.RepoLayer;

import com.example.subjectregportal.Entity.StudentCrs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface StudentRepo extends JpaRepository<StudentCrs,Long>{
    Optional<StudentCrs>findOneByEmailAndPassword(String email, String password);
    StudentCrs findByEmail(String email);
}
