package com.projectA.miniproject.controller;

import com.projectA.miniproject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable int id) {
        return ResponseEntity.ok().body(id);
    }


}













//    @GetMapping("/{id}")
//    public ResponseEntity<?> getId(@PathVariable int id){
//        try {
//            log.info("{}", id);
//            return ResponseEntity.ok().body(id);
//        } catch (Exception e) {
//            log.error("Error occurred", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred");
//        }
//    }

