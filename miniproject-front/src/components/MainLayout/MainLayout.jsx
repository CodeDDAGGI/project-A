import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SlidingBanner from '../SlidingBanner/SlidingBanner';
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import ListLayout from '../ListLayout/ListLayout';

function MainLayout(props) {

    return (
        <div css={s.layout}>
            <SlidingBanner />
            <CalendarLayout />
            <ListLayout />
        </div>
    );
}

export default MainLayout;