package com.projectA.miniproject.service;

import com.projectA.miniproject.dto.Request.ReqJoinUserDto;
import com.projectA.miniproject.dto.Request.ReqSigninDto;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.repository.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public int SignupUser(ReqJoinUserDto joinUser){
        log.info("{}", joinUser);

        User user = User.builder()
                .username(joinUser.getUsername())
                .password(joinUser.getPassword())
                .name(joinUser.getName())
                .email(joinUser.getEmail())
                .build();

        log.info("{}", user);

        return userMapper.save(user);
    }

    public Boolean signin(ReqSigninDto dto) {

        userMapper.

    }
}