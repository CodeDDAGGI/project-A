import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function LoginPage(props) {
    return (
        <div css={s.layout}>
            <div>
                <input type="text" />
                <input type="password" />
            </div>
        </div>
    );
}

export default LoginPage;