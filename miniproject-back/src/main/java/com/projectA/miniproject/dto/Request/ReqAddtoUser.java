package com.projectA.miniproject.dto.Request;

import lombok.Data;

@Data
public class ReqAddtoUser {

    private String username;
    private String password;
    private String user_email;

}
