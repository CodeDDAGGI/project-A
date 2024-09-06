package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    // 맵퍼 > 엔티티 > db
    // 데이터베이스에서 뺴는 리스트
    int addUser(User user);
    int delete(int userId);
    int edit(User user);

}
