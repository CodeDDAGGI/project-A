import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainLayout({ children }) {
    console.log(children);
    return (
        <div css={s.mainlayout}>
            {children}
        </div>
    );
}

export default MainLayout;