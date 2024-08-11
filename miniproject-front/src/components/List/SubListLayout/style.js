import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    width: 30%;
    /* border: 1px solid black; */
`;
export const container = css`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 100%;
`;
export const dataContainer = css`
    width:80%;
    white-space: nowrap;
    transform: translateY(10%);
    /* border-left: 1px solid #dbdbdb; */
    h3{
        margin: 15px 0 0 0;
        display: flex;
        align-items: center;
        width: 100%;
    }
    h3::after{
        content: "";
        flex-grow: 1;
        height: 1px;
        background: rgba(0,0,0,0.35);
    }
`;
export const lineContainer = css`
    border-left: 1px solid rgba(0,0,0,0.35);
    width: 100%;
    ul{
        margin: 15px 0 15px 10px;
        display: flex;
    }
    li{
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 10px;
        margin: 0 5px;

    }
`;