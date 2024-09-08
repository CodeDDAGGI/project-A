package com.projectA.miniproject.aspect;

import com.projectA.miniproject.dto.Request.ReqSignupDto;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.exception.ValidException;
import com.projectA.miniproject.repository.UserMapper;
import com.projectA.miniproject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.FieldError;

import javax.validation.ValidationException;

@Component
@Aspect
@Slf4j
public class ValidAspect {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    // 뱅규행아 골뱅이 어디갔노
    @Pointcut("@annotation(com.projectA.miniproject.aspect.annotation.ValidAop)")
    private void pointCut() {
    }

    @Around("pointCut()")
    public Object around(ProceedingJoinPoint proceedingJoinPoint)throws Throwable {
        Object[] args = proceedingJoinPoint.getArgs();
        BeanPropertyBindingResult bindingResult = null;

        for(Object arg : args){
            if(arg.getClass() == BeanPropertyBindingResult.class) {
                bindingResult = (BeanPropertyBindingResult) arg;
                break;
            }
        }

        switch (proceedingJoinPoint.getSignature().getName()){
            case "signup":
                ValidSignupDto(args, bindingResult);
                break;
        }

        if(bindingResult.hasErrors()){
            throw new ValidException("유효성 오류", bindingResult.getFieldErrors());
        }

        return proceedingJoinPoint.proceed();
    }


    public void ValidSignupDto(Object args[] , BeanPropertyBindingResult bindingResult){

        for (Object arg : args){
            if(arg.getClass() == ReqSignupDto.class){
                ReqSignupDto dto = (ReqSignupDto) arg;
                User findUser = userMapper.findByUsername(dto.getUsername());
                log.info("{}",findUser);

                if(!dto.getPassword().equals(dto.getCheckPassword())){
                    FieldError fieldError = new FieldError("checkPassword" , "checkPassword", "비밀번호 확인바랍니다");
                    bindingResult.addError(fieldError);
                }

                if(!dto.getUsername().equals(findUser.getUsername())){
                    FieldError fieldError = new FieldError("username" , "username", "이미 존재하는 아이디입니다.");
                    bindingResult.addError(fieldError);
                }
            }
        }
    }
}
