package com.projectA.miniproject.controller;

import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService  userService;

    //post 추가
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid   @RequestBody ReqSignupDto joinUser){
        log.info("{}", joinUser);
        return ResponseEntity.ok().body(userService.SignupUser(joinUser));
    }







}



//
//
//
//
//
//
//











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

