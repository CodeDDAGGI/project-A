import { css } from "@emotion/react";

export const swiperContainer = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    margin-bottom: 50px;
`;

export const swiper = css`
.swiper {
    width: 100%;
    height: 100%;
}
  
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    text-align: center;
    font-size: 20px;
    background: #dddddd;  
    cursor: pointer;
}
  
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
