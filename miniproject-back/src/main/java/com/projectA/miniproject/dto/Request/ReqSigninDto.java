package com.projectA.miniproject.dto.Request;

import com.projectA.miniproject.entity.User;
import lombok.Data;

@Data
public class ReqSigninDto {
    private String username;
    private String password;
}
