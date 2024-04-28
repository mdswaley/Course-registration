package com.example.subjectregportal.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="LoginData")
public class StudentCrs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstname;
    @Column(nullable = false)
    private String lastname;
    @Column(unique = true,nullable = false)
    private String email;
    @Column(nullable = false)
    private String gender;
    private String password;

    private String courseName;
    private Integer courseCredit;

    @JsonIgnore //serialize the json() object data
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<CourseRegistration> courseRegistrations;

    @Override
    public String toString() {
        return "StudentCrs{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", courseName='" + courseName + '\'' +
                ", courseCredit=" + courseCredit +
                '}';
    }
}
