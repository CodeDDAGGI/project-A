import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;

    & > svg {
        font-size: 35px;
        color: black;
        cursor: pointer;
    }
    
`;