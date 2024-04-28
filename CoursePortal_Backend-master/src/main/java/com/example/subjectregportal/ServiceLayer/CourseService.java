package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.AddCourse;

import com.example.subjectregportal.dto.AddCourDto;


import java.util.List;
import java.util.Optional;

public interface CourseService {
    String addCourse(AddCourDto addCourDto);
    List<AddCourse> getAllCourse();

    AddCourse updateCourse(AddCourse addCourse,Long id);


    void deleteCourseById(Long id);
    AddCourse saveCourse(AddCourse addCourse);

}
