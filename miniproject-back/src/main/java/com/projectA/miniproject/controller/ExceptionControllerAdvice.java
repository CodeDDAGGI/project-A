package com.projectA.miniproject.controller;

import com.projectA.miniproject.exception.SignupException;
import com.projectA.miniproject.exception.ValidException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(ValidException.class)
    private ResponseEntity<?> validException(ValidException e) {
        return ResponseEntity.badRequest().body(e.getFieldErrors());
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<?> authenticationException(AuthenticationException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    @ExceptionHandler(SignupException.class)
    public ResponseEntity<?> signupException(SignupException e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
    }
}
