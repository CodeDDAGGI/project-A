package com.projectA.miniproject.entity;


import com.projectA.miniproject.security.prinsipal.PrincipalUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    private Long user_id;
    private String username;
    private String password;
    private String name;
    private String email;
    private Set<UserRoles> userRoles;

    public PrincipalUser toPrincipal() {
        return PrincipalUser.builder()
                .id(user_id)
                .password(password)
                .roles(userRoles)
                .build();
    }

}
