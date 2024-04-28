package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.AddCourse;
import com.example.subjectregportal.Entity.Message;
import com.example.subjectregportal.dto.AddCourDto;

import java.util.List;

public interface MsgSer {
    Message saveMsg(Message message);

    List<Message> getAllMsg();
    void deleteMsgById(Long id);
}
