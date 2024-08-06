import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 800px;
    border: 1px solid #dbdbdb;
    background-color: red;
`;
export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 1800px;
    background-color: blue;
`;

export const dataContainer = css`
    display: flex;
    width: 100%;
    flex-grow: 1;
    background-color: green;
    table{
        width: 100%;
    }
    thead tr{
        display: flex;
        height: 30px;
        font-size: 20px;
        justify-content: space-around;
    }
    tr {
        display: flex;
        justify-content : space-around;
    }
    td {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0 10px 0;
        width: 200px;
        height: 250px;
        border: 1px solid white;

        img{
            object-fit: cover;
            overflow: hidden;
            width: 100%;
        }
    }
`;