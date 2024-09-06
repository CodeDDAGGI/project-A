import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function LoginPage(props) {

    const [ inputUser, setInputUser ] = useState({
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


    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>일단 로그인 페이지</h1>
            </div>
            <div css={s.loginInput}>
                <div>
                    <span>아이디: </span>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange} placeholder='아이디' />
                </div>
                <div>
                    <span>비밀번호: </span>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange} placeholder='비밀번호' />
                </div>
                <button onClick={handleLoginOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default LoginPage;