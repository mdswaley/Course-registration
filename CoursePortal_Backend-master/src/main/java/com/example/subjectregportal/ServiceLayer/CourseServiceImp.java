package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.AddCourse;


import com.example.subjectregportal.Repository.CourRepo;
import com.example.subjectregportal.dto.AddCourDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
//import java.util.Optional;

@Service
public class CourseServiceImp implements CourseService{

    @Autowired
    private CourRepo courRepo;

@Override
public AddCourse saveCourse(AddCourse addCourse) {
    return courRepo.save(addCourse);
}

    @Override
    public String addCourse(AddCourDto addCourDto) {
        return null;
    }

    @Override
    public List<AddCourse> getAllCourse() {
        return courRepo.findAll();
    }


    @Override
    public AddCourse
    updateCourse(AddCourse addCourse,
                     Long id)
    {

        AddCourse depDB
                = courRepo.findById(id)
                .get();

        if (Objects.nonNull(addCourse.getCourseName())
                && !"".equalsIgnoreCase(
                addCourse.getCourseName())) {
            depDB.setCourseName(
                    addCourse.getCourseName());
        }

        if (Objects.nonNull(
                addCourse.getCourseCredit()) && !"".equalsIgnoreCase(String.valueOf(addCourse.getCourseCredit()))) {
            depDB.setCourseCredit(addCourse.getCourseCredit());
        }

        if (Objects.nonNull(addCourse.getAssignTeacher())
                && !"".equalsIgnoreCase(
                addCourse.getAssignTeacher())) {
            depDB.setAssignTeacher(
                    addCourse.getAssignTeacher());
        }

        return courRepo.save(depDB);
    }




    @Override
    public void deleteCourseById(Long id) {
        courRepo.deleteById(id);
    }

}
