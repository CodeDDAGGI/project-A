import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import ListLayout from '../ListLayout/ListLayout';

function MainLayout(props) {
    return (
        <div css={s.layout}>
            <CalendarLayout />
            <ListLayout />
        </div>
    );
}

export default MainLayout;