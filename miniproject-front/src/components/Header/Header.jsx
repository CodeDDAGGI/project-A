import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import Icon from '../Forms/Icon/Icon';

function Header(props) {
    return (
        <div css={s.layout}>
            <div css={s.loginContainer}>
                <div css={s.buttonContainer}>
                    <div><Icon><LuSearch /></Icon></div>
                    <div><Link to={"/news/login"}><Icon><LuUser /></Icon></Link></div>
                    <div><Link to={"/news/signup"}><Icon><LuUserPlus /></Icon></Link></div>
                </div>
            </div>
            <div css={s.navContainer}>
                <h1>삼김뉴스</h1>
                <ul>
                    <li><Link to='/news/politics'>정치</Link></li>
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