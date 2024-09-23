import { css } from "@emotion/react";


export const searchBanner = css`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(3 , 199, 90 , 88);
  z-index: 99;
  height: 65px;
  & input { 
    width: 600px;
    height: 30px;
    border-radius: 10px;
    padding-left: 15px;
    font-size: 20px;
    border: none;
  
    &:focus{
      outline: none;
      border: none;
    } 

  }

  & svg {
    margin-left: 10px;
    font-size: 35px;
    cursor: pointer;
  }
`;