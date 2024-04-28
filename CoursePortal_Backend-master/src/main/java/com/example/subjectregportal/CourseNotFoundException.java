package com.example.subjectregportal;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CourseNotFoundException extends RuntimeException{
    private String ResourseName;
    private String FieldName;//to accept all types of values
    private Object FieldValue;


    public CourseNotFoundException(String resourseName, String fieldName, Object fieldValue) {
        super(String.format("%s with %s : %s Not Present",resourseName,fieldName,fieldValue));
        ResourseName = resourseName;
        FieldValue = fieldValue;
        FieldName = fieldName;
    }

    public String ResourseName() {
        return ResourseName;
    }

    public String FieldName() {
        return FieldName;
    }

    public Object FieldValue() {
        return FieldValue;
    }
}


