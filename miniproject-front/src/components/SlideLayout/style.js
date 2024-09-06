import { css } from "@emotion/react";

export const slidingBannerContainer = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
export const mainImageWrap = css`
    position: relative;
    width: 50%;
    height: 100%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const mainImageText = css`
    position: absolute;
    top: 80%;
    left: 10%;
    & h1 {
        font-size: 24px;
        color: white;
    }
`;

export const subImageWrap = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
`;

export const subImage = css`
    display: flex;
    flex-direction: row;

    & img {
        display: block;
        width: 50%;
        height: 210px;
        object-fit: cover;
    }
`;

