import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SlidingBanner from '../SlidingBanner/SlidingBanner';
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import BodyLayout from '../BodyListLayout/BodyLayout';

function MainLayout(props) {

    return (
        <div css={s.layout}>
            <SlidingBanner />
            <CalendarLayout />
            <BodyLayout />
        </div>
    );
}
export default MainLayout;