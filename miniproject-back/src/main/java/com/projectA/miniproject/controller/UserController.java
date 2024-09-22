package com.projectA.miniproject.controller;

import com.projectA.miniproject.aspect.annotation.ValidAop;
import com.projectA.miniproject.dto.Request.ReqAccessDto;
import com.projectA.miniproject.dto.Request.ReqSigninDto;
import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.security.prinsipal.PrincipalUser;
import com.projectA.miniproject.service.TokenService;
import com.projectA.miniproject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private TokenService tokenService;

    //post 추가
    @ValidAop
    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody ReqSignupDto joinUser, BindingResult bindingResult) {

        return ResponseEntity.ok().body(userService.SignupUser(joinUser));
    }

    @ValidAop
    @PostMapping("/auth/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody ReqSigninDto dto, BindingResult bindingResult) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(userService.getAccessToken(dto));
    }

    @GetMapping("/auth/access")
    public ResponseEntity<?> access(ReqAccessDto dto) {
        return ResponseEntity.ok().body(tokenService.isValidAccessToken(dto.getAccessToken()));
    }

    @GetMapping("/user/me")
    public ResponseEntity<?> getUserMe() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok().body(userService.getUserInfo(principalUser.getId()));
    }
}