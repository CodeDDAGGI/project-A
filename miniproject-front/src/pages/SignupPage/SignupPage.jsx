import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';

function SignupPage(props) {
    const [inputUser , setInputUser] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleInputData = (e) => {
        console.log(e.target.name);
        setInputUser({
            ...inputUser,
            [e.target.name]: e.target.value,
        });
    }



    const SignupSubmitClick = () => {
   
    }
    return (
        <div css={s.layout}>
            <div>
                <input type="text" name='username' value={inputUser.username} onChange={handleInputData}/>
                <input type="text" name='password' value={inputUser.password} onChange={handleInputData}/>
                <input type="text" name='email' value={inputUser.email} onChange={handleInputData}/>
            </div>
            <div>
                <button onClick={SignupSubmitClick}>가입하기</button>
            </div>
        </div>
    );
}

export default SignupPage;