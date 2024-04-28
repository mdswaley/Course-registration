package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.CourseRegistration;
import com.example.subjectregportal.Repository.CourseRegistrationRepo;
import com.example.subjectregportal.Repository.RegisterCourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RegisterCourSer implements RegisterCourSerImp{
    @Autowired
    private CourseRegistrationRepo courseRegistrationRepo;

    @Override
    public List<CourseRegistration> getCoursesByStudentId(Long studentId) {
        return courseRegistrationRepo.findByStudentId(studentId);
    }
}
