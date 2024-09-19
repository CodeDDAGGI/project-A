import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { Link, useNavigate } from 'react-router-dom';
import { SignupApi } from '../../apis/signupApi';
import { showFieldErrorMessage } from '../../exception/errorHandler';

function SignupPage() {
    const navigator = useNavigate();
    const [inputUser , setInputUser] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
    });
    const [fieldErrorMessages , setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>
    });

    const handleInputChange = (e) => {
        setInputUser(inputUser => ({
            ...inputUser,
            [e.target.name]: e.target.value,
        }));
    }


    const SignupSubmitClick = async () => {
        try{
            const signupdata = await SignupApi(inputUser);
            console.log(inputUser);
            console.log(signupdata);
            
        if (!signupdata.isSuccess) { 
            console.log("에러 띄워라",signupdata.fieldErrors);
            showFieldErrorMessage(signupdata.fieldErrors, setFieldErrorMessages);
            return;
        }

        alert("회원가입에 성공");
        navigator("/auth/login");

        }catch(error) {
        console.error('에러', error);
        console.log(error);
        alert("회원가입 중 오류 발생");
        }
    }
    
    
    return ( 
        <div css={s.layout}>
                <p>
                    <Link to={"/"}>사이트 로고</Link>
                </p>
                <div css={s.inputContainer}>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputChange} placeholder='아이디'/>
                    {fieldErrorMessages.username}
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputChange} placeholder='비밀번호'/>
                    {fieldErrorMessages.password}
                    <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputChange} placeholder='비밀번호 확인'/>
                    {fieldErrorMessages.checkPassword}
                    <input type="text" name='name' value={inputUser.name} onChange={handleInputChange} placeholder='이름'/>
                    {fieldErrorMessages.name}
                    <input type="email" name='email' value={inputUser.email} onChange={handleInputChange} placeholder='이메일'/>
                    {fieldErrorMessages.email}
                    <div css={s.signupButton}>
                        <button onClick={SignupSubmitClick}>가입하기</button>
                    </div>
                </div>
        </div>
    );
}

export default SignupPage;