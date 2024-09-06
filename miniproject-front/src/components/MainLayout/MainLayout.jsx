import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import BodyLayout from '../BodyListLayout/BodyLayout';
import SlidingBanner from '../SlidingBanner/SlidingBanner';

function MainLayout({children}) {
    return (
            <div css={s.layout}>
                {children}
            </div>
    );
}
export default MainLayout;