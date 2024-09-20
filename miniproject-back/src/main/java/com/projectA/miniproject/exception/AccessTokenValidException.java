package com.projectA.miniproject.exception;

public class AccessTokenValidException extends RuntimeException {

    public AccessTokenValidException(String message) {
        super(message);
    }
}
