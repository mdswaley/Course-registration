package com.example.subjectregportal.ControllerLayer;

import com.example.subjectregportal.Entity.StudentCrs;
import com.example.subjectregportal.RepoLayer.StudentRepo;
import com.example.subjectregportal.Response.LoginResponse;
import com.example.subjectregportal.ServiceLayer.LoginDto;
import com.example.subjectregportal.ServiceLayer.StudentService;
import com.example.subjectregportal.dto.CourseUpdateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController  {

    private final StudentRepo studentRepo;


    private  final StudentService studentService;

    @Autowired
    public StudentController(StudentRepo studentRepo, StudentService studentService) {
        this.studentRepo = studentRepo;
        this.studentService = studentService;
    }

@GetMapping("/getAllData")
List<StudentCrs> StudentDetails() {
    return studentRepo.findAll();
}

    @PostMapping("/portal/save")
    public ResponseEntity<StudentCrs> saveStudent(@RequestBody StudentCrs studentCrs){

        return new ResponseEntity<StudentCrs>(studentService.saveStudent(studentCrs), HttpStatus.CREATED);
    }

@PutMapping("/updateCourse/{email}")
public ResponseEntity<String> updateCourseDetails(@PathVariable String email,
                                                  @RequestBody List<CourseUpdateDto> courseUpdates) {
    try {
        studentService.updateCourseDetails(email, courseUpdates);
        return ResponseEntity.ok("Course details updated successfully.");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to update course details: " + e.getMessage());
    }
}
    @GetMapping("/{email}")
    public ResponseEntity<StudentCrs> getLoginDataByEmail(@PathVariable String email) {
        StudentCrs loginData = studentService.getLoginDataByEmail(email);
        if (loginData != null) {
            return ResponseEntity.ok(loginData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/portal/{id}")
    public StudentCrs getbyid(@PathVariable("id")Long id){
        return studentService.stbyId(id);
    }


    @PutMapping("/portal/{id}")
    public  ResponseEntity<String> updateStudent(@PathVariable("id")Long id,@RequestBody StudentCrs studentCrs){
        studentService.update(studentCrs,id);
        return new ResponseEntity<String>("Updated Successfully",HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/portal/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id")Long id){
        studentService.delete(id);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.FOUND);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto){
        LoginResponse loginResponse=studentService.loginstudent(loginDto);
        return ResponseEntity.ok(loginResponse);
    }
}
