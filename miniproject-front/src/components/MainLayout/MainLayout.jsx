import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import BodyLayout from '../BodyListLayout/BodyLayout';

function MainLayout(props) {
    return (
        <div css={s.layout}>
            <CalendarLayout />
            <BodyLayout />
        </div>
    );
}
export default MainLayout;