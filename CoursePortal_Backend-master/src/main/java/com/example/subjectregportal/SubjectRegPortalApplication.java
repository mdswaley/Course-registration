package com.example.subjectregportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SubjectRegPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(SubjectRegPortalApplication.class, args);
    }

}
