import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { LoginApi } from '../../apis/LoginApi';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();

    const [inputUser, setInputUser] = useState({
        username: "",
        password: ""
    });

    const handleInputOnChange = (e) => {
        setInputUser(inputUser => ({
            ...inputUser,
            [e.target.name]: e.target.value
        }))
    }

    const handleLoginOnClick = async () => {
        try {
            await LoginApi(inputUser);
            alert("로그인 성공");
        } catch (error) {

        }
    }

    return (
        <div css={s.layout}>
            <Link to={"/"}><h1 css={s.logo}>홈</h1></Link>
            <div css={s.loginInput}>
                <div>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange} placeholder='아이디' />
                </div>
                <div>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange} placeholder='비밀번호' />
                </div>
            </div>
            <button css={s.loginButton} onClick={handleLoginOnClick}>로그인</button>
        </div>
    );
}

export default LoginPage;