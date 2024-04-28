package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo extends JpaRepository<Profile,Long> {
    Profile findByEmail(String email);

}
