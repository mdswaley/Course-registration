package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.AddCourse;
import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.Entity.StudentCrs;
import com.example.subjectregportal.dto.AddCourDto;

import java.util.List;

public interface ProfileService {

    Profile saveProfile(Profile profile);
    List<Profile> getAllProileData();
    Profile getProfileByEmail(String email);
    Profile updateProfile(Profile profile,String email);

    void deleteProfileById(Long id);
}
