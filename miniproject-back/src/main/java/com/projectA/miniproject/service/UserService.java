package com.projectA.miniproject.service;

<<<<<<< HEAD
import com.projectA.miniproject.dto.Request.ReqJoinUserDto;
import com.projectA.miniproject.dto.Request.ReqSigninDto;
=======
import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.dto.Response.RespSignupDto;
import com.projectA.miniproject.entity.Role;
>>>>>>> b5708a9ad2a9c292cc207289c89175364c950753
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.exception.SignupException;
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
    public RespSignupDto SignupUser(ReqSignupDto signupDto){
        User user = null;

        try {
            user = signupDto.toEntity(passwordEncoder);
            userMapper.save(user);

            Role role = Role.builder()
                    .name("ROLE_NAME")
                    .build();

        }catch (Exception e){
            throw new SignupException(e.getMessage());
        }


        log.info("{}", signupDto);

        return RespSignupDto.builder()
                .message("회원가입 성공")
                .user(user)
                .build();
    }

    public Boolean signin(ReqSigninDto dto) {

        userMapper.

    }
}