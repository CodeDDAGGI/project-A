import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div css={s.HeaderContainer}>
                <div css={s.loginContainer}>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            <div css={s.logoContainer}>
                <h1>Logo</h1>
            </div>
            <div css={s.navContainer}>
                <ul>
                    <li><Link>정치</Link></li>
                    <li><Link>사회</Link></li>
                    <li><Link>국제</Link></li>
                    <li><Link>건강</Link></li>
                    <li><Link>재테크</Link></li>
                    <li><Link>스포츠</Link></li>
                    <li><Link>문화</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;