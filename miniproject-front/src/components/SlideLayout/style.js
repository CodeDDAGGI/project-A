import { css } from "@emotion/react";

export const mainImageWrap = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const mainImage = css`
    width: 100%;
    height: 100%;
`;

export const mainImageText = css`
    position: absolute;
    top: 70%;
    left: 10%;
    & h1 {
        font-size: 24px;
    }
    
`;

export const subImage = css`
    display: flex;
    flex-direction: column;
    width: 50%;

    & img {
        display: block;
        width: 50%;
        height: 100%;
        object-fit: cover;
    }
`;

