import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import { GrUserAdmin } from "react-icons/gr";
import Icon from '../Forms/Icon/Icon';
import { useQueryClient } from 'react-query';
import SearchBanner from '../SearchBanner/SearchBanner';

function Header(props) {

    const [isSearch, setSearch] = useState(false);
    const queryClient = useQueryClient();
    const accessTokenValidState = queryClient.getQueryState("accessTokenValidQuery");
    const bannerRef = useRef(null);

    const handleOnClick = () => {
        setSearch(!isSearch);
        console.log(isSearch);
    }

    // useEffect(()=> {
    //     const outSideClick = (e) => {
    //         if()
    //     }
    // },[])

    return (
        <div css={s.layout}>
            <div css={s.loginContainer}>
                <div css={s.buttonContainer}>
                    <div onClick={handleOnClick}><Icon><LuSearch /></Icon></div>
                    <div><Link to={"/auth/login"}><Icon><LuUser /></Icon></Link></div>
                    <div><Link to={"/auth/signup"}><Icon><LuUserPlus /></Icon></Link></div>
                    {
                        accessTokenValidState.status !== "success"
                            ?
                            <></>
                            :
                            <div><Icon><GrUserAdmin /></Icon></div>
                    }
                </div>
            </div>
            <div css={s.touchBanner} onBlur={bannerRef}>
                {  
                    isSearch !== false ? ( 
                    <div>
                        <SearchBanner/>
                    </div>
                    )
                    :<></>
                } 
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