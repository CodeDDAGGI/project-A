package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.UserRoles;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleUserMapper {
    int save(UserRoles userRoles);
}
