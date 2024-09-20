import React from 'react';
/** @jsxImportSource @emotion/react */
import { useQuery } from 'react-query';
import { PacmanLoader } from 'react-spinners';
import { instance } from '../../../apis/util/instance';
import * as s from "./style";

function MainListLayout(props) {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) > 10 ? "" : "0" + (date.getMonth() + 1);
    const days = (date.getDate() > 10 ? "" : "0") + (date.getDate());
    const day = date.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"]
    const toDay = year + "년 " + month + "월 " + days + "일 " + week[day] + "요일";

    const getMainList = useQuery(
        ["getListQuery"],
        async () => await instance.get("/news"),
        {
            retry: 0,
            refetchOnWindowFocus: false,
        }
    )
    console.log(getMainList?.data?.data);
    return (
        <div css={s.layout}>

            <div css={s.container}>
                <div css={s.containerHeader}>
                    <h2><span>이 시각 <font>주요뉴스 </font></span> <strong>{toDay}</strong></h2>
                </div>
                <div css={s.category}>
                    <h2>핫토픽</h2>
                    <h2>정치</h2>
                    <h2>경제</h2>
                    <h2>스포츠</h2>
                    <h2>엔터</h2>
                </div>

                <div css={s.mapContainer}>
                    {
                        getMainList.isLoading &&
                        <><PacmanLoader /></>
                    }
                    {
                        getMainList.isError &&
                        <h2>Error</h2>
                    }
                    {
                        getMainList?.data?.data?.map(news => (
                            <div css={s.dataSection}>
                                <h2>{news.title}</h2>
                                <div>
                                    <div >
                                        <img src={news.img_url} alt="" />
                                    </div>
                                    <div css={s.textConatainer}>
                                        <p dangerouslySetInnerHTML={{ __html: news.content }}></p>
                                        {/* <p>{news.content}</p> */}
                                        {/* <p>뫄아우</p> */}
                                    </div>
                                </div>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>{news.news_id}</p>
                                    <p>{news.user_id}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default MainListLayout;