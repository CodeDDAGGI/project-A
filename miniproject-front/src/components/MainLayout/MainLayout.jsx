import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainLayout({children}) {
    return (
        <div css={s.mainlayout}>
            <h1>합숙소 프로젝트</h1>
            {children}
        </div>
    );
}

export default MainLayout;