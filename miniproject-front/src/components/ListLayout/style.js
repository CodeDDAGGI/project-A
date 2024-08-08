import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    /* height: 800px; */
    flex-grow: 1;
    /* border: 1px solid #dbdbdb; */
`;
export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 40%;
    /* height: 1800px; */
`;

export const category = css`
    display: flex;
    width: 100%;
    h2{
        display: flex;
        justify-content: center;
        flex-grow: 1;
    }
`;
export const mapContainer = css`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
`;
export const dataSection = css`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    /* border-radius: 15px; */
    width: 100%;
    overflow: hidden;
h2{
    display: flex;
    justify-content: center;
    margin: 0 0 5px 0;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    & + div{
        display: flex;
    }
}
    display: flex;
    img{
        width: 20%;
        border-radius: 15px;
        margin-right: 50px;
    }
    p{  
        width: 70%;
        height: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        cursor: pointer;
    }
`;