package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.Role;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {

    int save(Role role);
}