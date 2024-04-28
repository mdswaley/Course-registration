package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.Message;
import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.Repository.MsgRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MsgSerImp implements MsgSer{
    @Autowired
    private MsgRepo msgRepo;
    @Override
    public Message saveMsg(Message message) {
        return msgRepo.save(message);
    }

    @Override
    public List<Message> getAllMsg() {
        return (List<Message>) msgRepo.findAll();
    }

    @Override
    public void deleteMsgById(Long id) {
        msgRepo.deleteById(id);
    }
}
