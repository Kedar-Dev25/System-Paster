package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Message;

public interface MessageRepository extends JpaRepository<Message, String> {
        Message findBySid(String sid);

}