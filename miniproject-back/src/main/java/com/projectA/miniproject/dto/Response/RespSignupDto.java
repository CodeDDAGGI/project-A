package com.projectA.miniproject.dto.Response;

import com.projectA.miniproject.entity.User;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespSignupDto {
    private String message;
    private User user;

}
