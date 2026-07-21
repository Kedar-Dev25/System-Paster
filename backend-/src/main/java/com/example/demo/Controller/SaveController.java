package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Message;
import com.example.demo.Repository.MessageRepository;

@RestController
@CrossOrigin(origins = "https://system-paster.vercel.app")

public class SaveController {
    @Autowired
    private MessageRepository repo;

    @PostMapping("/save")
    public String saveMessage(@RequestBody Message message) {
        repo.save(message);
        return "Success";
    }
}