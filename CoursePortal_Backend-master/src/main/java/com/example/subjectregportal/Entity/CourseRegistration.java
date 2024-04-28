package com.example.subjectregportal.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="CourseRegistration")
public class CourseRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentCrs student;

    @Column(nullable = false)
    private String courseName;


    private Integer courseCredit;

    @Override
    public String toString() {
        return "CourseRegistration{" +
                "id=" + id +
                ", courseName='" + courseName + '\'' +
                ", courseCredit=" + courseCredit +
                '}';
    }
}
