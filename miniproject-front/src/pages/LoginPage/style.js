import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    width: 400px;
`;

export const logo = css`

`;

export const loginInput = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    & input {
        box-sizing: border-box;
        outline: none;
        border: none;
        width: 100%;
        height: 50px;
        font-size: 18px;
    }

    & p {
        margin: 0px 0px 10px 10px;
        color: #ff2f2f;
        font-size: 12px;
    }

    & div {
        box-sizing: border-box;
        padding: 0px 20px;
        width: 100%;
    }

    & div:nth-of-type(1) {
        border: 1px solid #dbdbdb;
        border-bottom: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    & div:nth-last-of-type(1) {
        border: 1px solid #dbdbdb;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        margin-bottom: 10px;
    }

`;

export const loginButton = css`

    width: 100%;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    cursor: pointer;
`;