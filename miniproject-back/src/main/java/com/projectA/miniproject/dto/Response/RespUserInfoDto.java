package com.projectA.miniproject.dto.Response;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class RespUserInfoDto {
    private Long userId;
    private String username;
    private String name;
    private String email;
    private Set<String> roles;
}
