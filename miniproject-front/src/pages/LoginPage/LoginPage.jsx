/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from "./style";
import { LoginApi } from '../../apis/LoginApi';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';

function LoginPage(props) {
    const navigate = useNavigate();

    const [inputUser, setInputUser] = useState({
        username: "",
        password: ""
    });

    const [ fieldErrorMessages, setFieldErrorMessages ] = useState({
        username: <></>,
        password: <></>,
    });

    const handleInputOnChange = (e) => {
        setInputUser(inputUser => ({
            ...inputUser,
            [e.target.name]: e.target.value
        }))
    }

    const showfieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErrors = {
            username: <></>,
            password: <></>,
        };

        for(let fieldError of fieldErrors) {
            EmptyFieldErrors = {
                ...EmptyFieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }
        
        setFieldErrorMessages(EmptyFieldErrors);
    }

    const handleLoginOnClick = async () => {
        const signinData = await LoginApi(inputUser);
        if(!signinData.isSuccess) {
            if(signinData.errorStatus === 'fieldError') {
                showfieldErrorMessage(signinData.error);
            }
            if(signinData.errorStatus === 'loginError') {
                let EmptyFieldErrors = {
                    username: <></>,
                    password: <></>
                };
                setFieldErrorMessages(EmptyFieldErrors);
                alert(signinData.error);
            }
            return;
        }

        localStorage.setItem("accessToken", "Bearer " + signinData.token.accessToken); 

        instance.interceptors.request.use(config => {
            config.headers["Authorization"] = localStorage.getItem("accessToken");
            return config;
        });

        if (window.history.length > 2) {
            navigate(-1); 
            return;
        }
        navigate("/");
    }

    return (
        <div css={s.layout}>
            <Link to={"/"}><h1 css={s.logo}>홈</h1></Link>
            <div css={s.loginInput}>
                <div>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange} placeholder='아이디' />
                    {fieldErrorMessages.username}
                </div>
                <div>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange} placeholder='비밀번호' />
                    {fieldErrorMessages.password}
                </div>
            </div>
            <button css={s.loginButton} onClick={handleLoginOnClick}>로그인</button>
        </div>
    );
}

export default LoginPage;