package com.example.subjectregportal.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="StudentCourse")
public class AddCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String courseName;
    private Integer courseCredit;
    private String assignTeacher;

    // No-args constructor is required by JPA

}
