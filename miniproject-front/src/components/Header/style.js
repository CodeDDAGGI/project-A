import { css } from "@emotion/react";

export const HeaderContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    width: 100%;
    height: 130px;
`;

export const loginContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: #000000;
`;

export const buttonContainer = css`
    display: flex;
    justify-content: row;
    align-items: center;
    width: 300px;
    height: 100%;
    & button {
        width: 80px;
        height: 40px;
        border: none;
        background: none;
        font-size: 25px;
        color: #fafafa;
        :hover {
            cursor: pointer;
        }
    }
`;

export const navContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: #8eb9dd;
    
    & h1 {
        font-size: 26px;
        cursor: default;
    }

    & ul {
        display: flex;
        flex-direction: row;
        
        li {
        display: flex;
        justify-content: space-between;
        margin: 0px 60px;
        font-size: 18px;
        }
        
        a {
            font-weight: 600;
            text-decoration: none;
            color: black;
        }
}
`;