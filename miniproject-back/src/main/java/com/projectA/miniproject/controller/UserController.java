package com.projectA.miniproject.controller;

import com.projectA.miniproject.aspect.annotation.ValidAop;
import com.projectA.miniproject.dto.Request.ReqSigninDto;
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
    private UserService userService;

    //post 추가
    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody ReqSignupDto joinUser) {
        log.info("{}", joinUser);
        return ResponseEntity.ok().body(userService.SignupUser(joinUser));
    }

    @PostMapping("/auth/signin")
    public ResponseEntity<?> signin(@RequestBody ReqSigninDto dto) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(userService.getAccessToken(dto));
    }

}