package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProfileSerImp implements ProfileService {

    @Autowired
    private ProfileRepo profileRepo;
    @Override
    public Profile saveProfile(Profile profile) {
        return profileRepo.save(profile);
    }

    @Override
    public List<Profile> getAllProileData() {
        return (List<Profile>) profileRepo.findAll();
    }

    @Override
    public Profile getProfileByEmail(String email) {
        return profileRepo.findByEmail(email);
    }

    @Override
    public Profile updateProfile(Profile profile, String email) {
        Profile prdb = profileRepo.findByEmail(email);

        if (prdb == null) {
            // Handle the case when the profile with the given email doesn't exist
            // You can throw an exception or handle it based on your application's logic
        } else {
            if (profile.getName() != null && !profile.getName().isEmpty()) {
                prdb.setName(profile.getName());
            }

            if (profile.getEmail() != null && !profile.getEmail().isEmpty()) {
                prdb.setEmail(profile.getEmail());
            }

            if (profile.getRegNo() != null) {
                prdb.setRegNo(profile.getRegNo());
            }

            if (profile.getUrl() != null && !profile.getUrl().isEmpty()) {
                prdb.setUrl(profile.getUrl());
            }
        }
        return profileRepo.save(prdb);
    }


    @Override
    public void deleteProfileById(Long id) {
        profileRepo.deleteById(id);
    }
}
