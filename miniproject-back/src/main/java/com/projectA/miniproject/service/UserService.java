package com.projectA.miniproject.service;

import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.entity.Role;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.repository.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

//    @Transactional(rollbackFor = )
    public int SignupUser(ReqSignupDto signupDto){
        User user = null;

        try {
            user = signupDto.toEntity(passwordEncoder);
            userMapper.save(user);

            Role role = Role.builder()
                    .name("ROLE_NAME")
                    .build();
        }catch (Exception e){
            throw new
        }


        log.info("{}", signupDto);


        log.info("{}", user);

        return userMapper.save(user);
    }
}