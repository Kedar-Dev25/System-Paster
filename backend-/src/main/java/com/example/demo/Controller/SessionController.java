package com.example.demo.Controller;

import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://system-paster.vercel.app")
@RequestMapping
public class SessionController {
    
    @PostMapping("/session")
    public String postMethodName() {
        String sid = UUID.randomUUID().toString();
        return sid;
    }
    
}