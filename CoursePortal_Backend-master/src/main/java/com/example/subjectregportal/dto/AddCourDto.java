package com.example.subjectregportal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddCourDto {

    private String courseName;
    private Integer courseCredit;
    private String assignTeacher;

    public AddCourDto(String courseName, Integer courseCredit, String assignTeacher) {
        this.courseName = courseName;
        this.courseCredit = courseCredit;
        this.assignTeacher = assignTeacher;
    }
}
