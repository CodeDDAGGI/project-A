import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const header = css`
    margin-bottom: 10px;
`;

export const loginInput = css`
    display: flex;
    flex-direction: column;

    & input {
        margin-bottom: 10px;
    }

    & span {
        font-weight: 600;
    }
`;