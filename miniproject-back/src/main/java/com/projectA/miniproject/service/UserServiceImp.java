package com.projectA.miniproject.service;

import com.projectA.miniproject.dto.Request.ReqAddtoUser;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.repository.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserServiceImp implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int delete(int userId) {
        return userMapper.deleteUser(userId);
    }

    // 요청받은 dto를 맵퍼에 건네주기 위해 엔티티로 변환
    @Override
    public int addUser(ReqAddtoUser addtoUser) {
       User user = User.builder()
               .username(addtoUser.getUsername())
               .user_email(addtoUser.getUser_email())
               .password(addtoUser.getPassword())
               .build();
        log.info("{}" , user);
       return userMapper.addUser(user);
    }


}
