package com.projectA.miniproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class news {

    private int user_id;
    private String username;
    private String password;
    private String user_email;

}
