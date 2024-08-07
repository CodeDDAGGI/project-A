import { css } from "@emotion/react";

export const HeaderContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 1300px;
    height: 15%;
    border: 1px solid #000000;
`;
export const logoContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50%;
`;

export const loginContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
    height: 100%;
    & button {
        width: 80px;
        height: 30px;
        margin: 0px 10px;
    }

`
export const navContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 50%;
`;

export const links = css`
    display: flex;
    flex-direction: row;
    & li {
        margin: 0px 100px;
    }
`;