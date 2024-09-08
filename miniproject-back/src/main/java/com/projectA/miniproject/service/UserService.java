package com.projectA.miniproject.service;

import com.projectA.miniproject.dto.Request.ReqSigninDto;
import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.dto.Response.RespSigninDto;
import com.projectA.miniproject.dto.Response.RespSignupDto;
import com.projectA.miniproject.entity.Role;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.exception.SignupException;
import com.projectA.miniproject.repository.UserMapper;
import com.projectA.miniproject.security.jwt.JwtProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtProvider jwtProvider;

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

    public RespSigninDto getAccessToken(ReqSigninDto dto) {
        User user = isValidUsernameAndPassword(dto.getUsername(), dto.getPassword());
        return RespSigninDto.builder()
                .accessToken(jwtProvider.generateAccessToken(user))
                .expireDate(jwtProvider.getExpireDate().toLocaleString())
                .build();
    }

    private User isValidUsernameAndPassword(String username, String password) {
        User user = userMapper.findByUsername(username);

        if(user == null) {
            throw new UsernameNotFoundException("사용자 정보를 다시 확인하세요.");
        }

        if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("사용자 정보를 다시 확인하세요.");
        }

        return user;
    }
}