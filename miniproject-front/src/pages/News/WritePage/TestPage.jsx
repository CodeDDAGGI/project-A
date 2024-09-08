import { css } from '@emotion/react';
import React from 'react';
/** @jsxImportSource @emotion/react */

const layout = css`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const header = css`
    width: 100%;
    height: 50px;
    background-color: black;
`;
const body = css`
    width:100%;
    height: 100px;
    background-color: pink;
`;
const footer = css`
    width:100%;
    height: 100px;
    background-color: blue;
`;
const hihi = css`
    display: flex;
    flex-direction: column;
`;
const hipi = css`
    position: relative;
    display: flex;
    justify-content: flex-end;
    
    & > div{
        position: absolute;
        bottom: 0;
        right: 0;

    }
`;

function TestPage(props) {
    return (
        <div css={layout}>
            <div css={header}></div>
            <div css={hihi}>
                <div css={body}>

                </div>
                <div css={hipi}>
                    <div>hi</div>
                </div>
            </div>
            <div css={footer}></div>
        </div >
    );
}

export default TestPage;