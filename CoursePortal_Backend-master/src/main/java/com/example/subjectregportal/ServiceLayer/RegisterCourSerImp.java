package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.CourseRegistration;

import java.util.List;
import java.util.Optional;

public interface RegisterCourSerImp {
    List<CourseRegistration> getCoursesByStudentId(Long studentId);
}
