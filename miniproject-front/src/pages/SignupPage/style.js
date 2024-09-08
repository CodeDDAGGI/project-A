import { css } from "@emotion/react";

export const layout = css`
    display: flex; 
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    
    p{
        font-size: 30px;
    }

`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input {
        margin-bottom: 12px;
        padding: 10px;
        width: 300px;
        height: 30px;
        border-radius: 10px;
        outline: none;
        border: 1px solid #dcdcdc;
        font-size: 18px;
    }

`;
export const logolayout = css`
    height: 30px;
    width: 100%;
    border: 1px solid black;
`;

export const signupButton = css`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    /* margin-top: 10px; */
    
    & button {   
    font-weight: 600;
    box-sizing: border-box;
    height : 40PX;
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: 0px solid #dcdcdc;
    font-size: 18px;
    background-color: #dcdcdc;
    cursor: pointer;
    }  

    & button:hover{
        background-color: #c4c4c466;
        font-size: 20px;
        font-weight: 600;
    }
`;


