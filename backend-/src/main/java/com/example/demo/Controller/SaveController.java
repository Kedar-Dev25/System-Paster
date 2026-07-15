package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Message;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SaveController {

    @PostMapping("/save")
    public String saveMessage(@RequestBody Message message) {

        System.out.println(message.getSid());
        System.out.println(message.getMessage());

        return "Success";
    }
}