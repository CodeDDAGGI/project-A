package com.projectA.miniproject.dto.Response;


import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class RespUser {

    private int userId;
    private String username;
    private String password;
    private String user_email;
}
