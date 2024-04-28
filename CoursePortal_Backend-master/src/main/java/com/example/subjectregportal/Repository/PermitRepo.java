package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermitRepo extends JpaRepository<Permission,Long> {
    Permission findByEmail(String email);
}
