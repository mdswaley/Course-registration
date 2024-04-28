package com.example.subjectregportal.ControllerLayer;

import com.example.subjectregportal.Entity.AddCourse;
import com.example.subjectregportal.Entity.CourseRegistration;
import com.example.subjectregportal.ServiceLayer.CourseService;
import com.example.subjectregportal.ServiceLayer.RegisterCourSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseService courSer;

    @Autowired
    private RegisterCourSer registerCourSer;

    @PostMapping("/addCourse")
    public AddCourse saveCourse(@Validated @RequestBody  AddCourse addCourse) {
        return courSer.saveCourse(addCourse);
    }

    @GetMapping("/allCourse")
    public List<AddCourse> getAllCourses() {
        return courSer.getAllCourse();
    }


    @GetMapping("/courses/{studentId}")
    public List<CourseRegistration> getCoursesByStudentId(@PathVariable Long studentId) {
        return registerCourSer.getCoursesByStudentId(studentId);
    }


    @PutMapping("/courses/{id}")
    public AddCourse updateCourse(@RequestBody AddCourse addCourse,@PathVariable("id") Long id) {
            return courSer.updateCourse(addCourse,id);
    }


    @DeleteMapping("/deleteCourse/{id}")
    public String deleteCourseById(@PathVariable("id") Long id) {
        courSer.deleteCourseById(id);
        return "Deleted Successfully";
    }


}
