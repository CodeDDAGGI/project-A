package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.Role;
import com.projectA.miniproject.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {

    int save(Role role);
    Role findByName(String name);
}
