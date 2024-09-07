package com.projectA.miniproject.exception;

import lombok.Getter;
import org.springframework.validation.FieldError;

import java.util.List;

public class ValidException extends Exception{

    @Getter
    private List<FieldError> fieldError;

    public ValidException(String message, List<FieldError> fieldError ) {
        super(message);
        this.fieldError = fieldError;
    }
}
