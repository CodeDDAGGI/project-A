import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { Link, useNavigate } from 'react-router-dom';
import { SignupApi } from '../../apis/signupApi';

function SignupPage(props) {
    const navigator = useNavigate();
    const [inputUser , setInputUser] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
    });

    const handleInputChange = (e) => {
        setInputUser(inputUser => ({
            ...inputUser,
            [e.target.name]: e.target.value,
        }));
    }


    const SignupSubmitClick = async () => {
        const signupdata = await SignupApi(inputUser);
        console.log(inputUser);
        console.log(signupdata);
        
        if(!signupdata.isSuccess) {
            alert("회원가입에 실패했습니다.");
            return;
        }

        alert("회원가입에 성공");
        navigator("/");
    }

    
    return (
        <div css={s.layout}>
                <p>
                    <Link to={"/"}>사이트 로고</Link>
                </p>
                <div css={s.inputContainer}>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputChange} placeholder='아이디'/>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputChange} placeholder='비밀번호'/>
                    <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputChange} placeholder='비밀번호 확인'/>
                    <input type="text" name='name' value={inputUser.name} onChange={handleInputChange} placeholder='이름'/>
                    <input type="email" name='email' value={inputUser.email} onChange={handleInputChange} placeholder='이메일'/>
                    <div css={s.signupButton}>
                        <button onClick={SignupSubmitClick}>가입하기</button>
                    </div>
                </div>
        </div>
    );
}

export default SignupPage;