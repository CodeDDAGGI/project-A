import { css } from "@emotion/react";

export const HeaderContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    width: 1300px;
    border-bottom: 4px solid #000000;
`;

export const loginContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;

    & button {
        width: 70px;
        height: 30px;
        margin-left: 10px;
        :hover {
            cursor: pointer;
        }
    }
`;

export const logoContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid black;
    & h1 {
        font-size: 60px;
        margin-bottom: 10px;
        cursor: default;
    }
`;

export const navContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 30px;

    & ul {
        display: flex;
        flex-direction: row;
    }

    & li {
        margin: 0px 50px;
        font-size: 25px;
    }
`;