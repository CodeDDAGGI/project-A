import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Header(props) {
    return (
        <div css={s.HeaderContainer}>
            <div css={s.logo}>
                <h1>Logo</h1>
                <h1>Header</h1>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
            <div css={s.menu}>
                <link rel="stylesheet" href="" />
                <link rel="stylesheet" href="" />
                <link rel="stylesheet" href="" />
                <link rel="stylesheet" href="" />
            </div>
        </div>
    );
}

export default Header;