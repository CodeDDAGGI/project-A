import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div css={s.HeaderContainer}>
            <div css={s.logoContainer}>
                <h1>Logo</h1>
                <h1>Header</h1>
                <div css={s.loginContainer}>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
            <div css={s.navContainer}>
                <ul css={s.links}>
                    <li><Link>정치</Link></li>
                    <li><Link>경제</Link></li>
                    <li><Link>스포츠</Link></li>
                    <li><Link>엔터</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;