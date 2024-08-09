package com.projectA.miniproject.repository;


import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int save(User user);
}
