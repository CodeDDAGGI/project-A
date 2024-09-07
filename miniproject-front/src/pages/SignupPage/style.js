import { css } from "@emotion/react";

export const layout = css`
    display: flex; 
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;


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

    & button {   
        height : 30PX;
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        outline: none;
        border: 1px solid #dcdcdc;
        font-size: 18px;
        background-color: #dcdcdc;
        cursor: pointer;
    }    
`;

export const signupButton = css`
        box-sizing: border-box;
        width: 300px;
        height: 30px;
        margin: 10px;
        font-weight: 18px;

    
`;