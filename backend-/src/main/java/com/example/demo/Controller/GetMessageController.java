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
public class GetMessageController {

    @Autowired
    private MessageRepository repo;

    @PostMapping("/get-message")
    public String GetMessage(@RequestBody Message message) {
        System.out.println(message.getSid());
        Message msg = repo.findBySid(message.getSid());

    return msg.getMessage();
    }
    

}