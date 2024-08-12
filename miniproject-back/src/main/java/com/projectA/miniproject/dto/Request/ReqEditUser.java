package com.projectA.miniproject.dto.Request;

import lombok.Data;

@Data
public class ReqEditUser {
    private int user_id;
    private String username;
    private String password;
    private String user_email;
}
