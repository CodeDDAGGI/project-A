package com.projectA.miniproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRoles {
    private Long id;
    private Long userId;
    private Long roleId;
    private Role role;
}
