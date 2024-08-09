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
    height: 40px;

    & button {
        width: 70px;
        height: 30px;
        border: none;
        background: none;
        margin-left: 5px;
        font-size: 14px;
        font-weight: 600;
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

    & h1 {
        font-size: 60px;
        margin-bottom: 40px;
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
        
        li {
        display: flex;
        justify-content: space-between;
        margin: 0px 60px;
        font-size: 20px;
        }
        
        a {
            font-weight: 800;
            text-decoration: none;
            color: black;
        }
}

`;