package com.example.subjectregportal.Repository;

import com.example.subjectregportal.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MsgRepo extends JpaRepository<Message , Long> {
}
