package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.CourseRegistration;
import com.example.subjectregportal.Entity.StudentCrs;
import com.example.subjectregportal.Repository.CourseRegistrationRepo;
import com.example.subjectregportal.Response.LoginResponse;
import com.example.subjectregportal.StudentNotFoundException;
import com.example.subjectregportal.RepoLayer.StudentRepo;
import com.example.subjectregportal.dto.CourseUpdateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImp implements StudentService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    private StudentRepo studentRepo;
    @Autowired
    private CourseRegistrationRepo courseRegistrationRepo;

//    @Autowired
//    public StudentServiceImp(StudentRepo studentRepo) {
//        this.studentRepo = studentRepo;
//    }
@Autowired
public void setStudentRepo(StudentRepo studentRepo) {
    this.studentRepo = studentRepo;
}

    @Override
    public StudentCrs saveStudent(StudentCrs studentCrs) {
        studentCrs.setPassword(passwordEncoder.encode(studentCrs.getPassword()));
        return studentRepo.save(studentCrs);
    }

    @Override
    public List<StudentCrs> getSt() {
//        System.out.println("1");  Testing Purpose
        return studentRepo.findAll();
    }
//
    @Override
    public StudentCrs stbyId(Long id) {
        System.out.println("2");
        Optional<StudentCrs> st=studentRepo.findById(id);
        if (st.isPresent()){
            return st.get();
        }else {
            throw new StudentNotFoundException("Student","regid",id);
        }
    }
//
    @Override
    public StudentCrs update(StudentCrs studentCrs, Long id) {
        studentRepo.findById(id);
        studentRepo.findById(id).orElseThrow(()
                -> new StudentNotFoundException("Student","regid",id));
        studentRepo.save(studentCrs);
        return studentCrs;
    }
//
    @Override
    public void delete(Long id) {
        studentRepo.findById(id).orElseThrow(()
                ->new StudentNotFoundException("Student","regid",id));
        studentRepo.deleteById(id);
    }

    @Override
    public LoginResponse loginstudent(LoginDto loginDto) {
        String msg="";
        StudentCrs studentCrs =studentRepo.findByEmail(loginDto.getEmail());
        if(studentCrs !=null){
            String password=loginDto.getPassword();
            String encodepassword= studentCrs.getPassword();
            Boolean isPwdRight=passwordEncoder.matches(password,encodepassword);
            if(isPwdRight){
//                System.out.println(loginDto.getEmail());
//                System.out.println(loginDto.getPassword());
                Optional<StudentCrs>student1=studentRepo.findOneByEmailAndPassword(loginDto.getEmail(),encodepassword);
                System.out.println(student1);
                if(student1.isPresent()){
                    return new LoginResponse("login successfully",true);
                }
                else{
                    return new LoginResponse("login failed",false);
                }
            }
            else {
                return new LoginResponse("password not  mmatch",false);
            }
        }
        else {
            return new LoginResponse("email not match",false);
        }

    }

//    @Override
//    public void updateCourseDetails(String email, String courseName, Integer courseCredit) {
//        // Retrieve the user from the database based on the email
//        StudentCrs student = studentRepo.findByEmail(email);
//
//        // Check if the user exists
//        if (student != null) {
//            // Update the course details for the user
//            student.setCourseName(courseName);
//            student.setCourseCredit(courseCredit);
//
//            // Save the updated user entity
//            studentRepo.save(student);
//        } else {
//            // Handle the case where the user does not exist
//            throw new StudentNotFoundException("User with email " + email + " not found.");
//        }
//    }

    @Override
    public void updateCourseDetails(String email, List<CourseUpdateDto> courseUpdateDtoList) {
        // Retrieve the user from the database based on the email
        StudentCrs student = studentRepo.findByEmail(email);

        // Check if the user exists
        if (student != null) {
            List<CourseRegistration> courseRegistrations = new ArrayList<>();
            // Update or add new courses for the user
            for (CourseUpdateDto courseUpdateDto : courseUpdateDtoList) {
                CourseRegistration courseRegistration = new CourseRegistration();
                courseRegistration.setCourseName(courseUpdateDto.getCourseName());
                courseRegistration.setCourseCredit(courseUpdateDto.getCourseCredit());
                courseRegistration.setStudent(student);
                courseRegistrations.add(courseRegistration);
            }
            student.setCourseRegistrations(courseRegistrations);
            // Save the updated user entity
            studentRepo.save(student);
        } else {
            // Handle the case where the user does not exist
            throw new StudentNotFoundException("User with email " + email + " not found.");
        }
    }

    public StudentCrs getLoginDataByEmail(String email) {
        // Retrieve login data for the given email from the repository
        System.out.println("2");
        Optional<StudentCrs> st= Optional.ofNullable(studentRepo.findByEmail(email));
        if (st.isPresent()){
            return st.get();
        }else {
            throw new StudentNotFoundException("Student","email",email);
        }
    }

}
