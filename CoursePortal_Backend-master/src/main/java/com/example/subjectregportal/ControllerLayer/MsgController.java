package com.example.subjectregportal.ControllerLayer;

import com.example.subjectregportal.Entity.AddCourse;
import com.example.subjectregportal.Entity.Message;
import com.example.subjectregportal.ServiceLayer.MsgSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MsgController {
    @Autowired
    private MsgSer msgSer;

    @PostMapping("/sendMsg")
    public Message saveMsg(@Validated @RequestBody Message message) {
        return msgSer.saveMsg(message);
    }

    @GetMapping("/allMsg")
    public List<Message> getAllMsg() {
        return msgSer.getAllMsg();
    }

    @DeleteMapping("/deleteMsg/{id}")
    public String deleteMsgById(@PathVariable("id") Long id) {
        msgSer.deleteMsgById(id);
        return "Deleted Successfully";
    }
}
