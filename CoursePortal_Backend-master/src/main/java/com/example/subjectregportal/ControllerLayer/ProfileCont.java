package com.example.subjectregportal.ControllerLayer;

import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.Entity.StudentCrs;
import com.example.subjectregportal.ServiceLayer.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileCont {
    @Autowired
    private ProfileService profileService;

    // Save operation
    @PostMapping("/addProfile")

    public Profile saveProfile(
            @Validated @RequestBody Profile profile)
    {
        return profileService.saveProfile(profile);
    }

    // Read operation
    @GetMapping("/profile")
    public List<Profile> getAllProfile()
    {
        return profileService.getAllProileData();
    }

    @GetMapping("/getEmailData/{email}")
    public ResponseEntity<Profile> getProgileDataByEmail(@PathVariable String email) {
        Profile profiledata = profileService.getProfileByEmail(email);
        if (profiledata != null) {
            return ResponseEntity.ok(profiledata);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update operation
    @PutMapping("/profile/{email}")
    public Profile
    updateProfile(@RequestBody Profile profile,@PathVariable("email") String email)
    {
        return profileService.updateProfile(
                profile, email);
    }

    // Delete operation
    @DeleteMapping("/profileDelete/{id}")

    public String deleteProfileById(@PathVariable("id")
                                       Long id)
    {
        profileService.deleteProfileById(
                id);
        return "Deleted Successfully";
    }
}
