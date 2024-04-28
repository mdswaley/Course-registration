package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.StudentCrs;
import com.example.subjectregportal.Response.LoginResponse;
import com.example.subjectregportal.dto.CourseUpdateDto;

import java.util.List;

public interface StudentService {
    StudentCrs saveStudent(StudentCrs studentCrs);
    List<StudentCrs> getSt();
    StudentCrs stbyId(Long id);
    StudentCrs update(StudentCrs studentCrs, Long id);
    void delete(Long id);

    StudentCrs getLoginDataByEmail(String email);

    void updateCourseDetails(String email, List<CourseUpdateDto> courseUpdateDtos);

    LoginResponse loginstudent(LoginDto loginDto);
}
