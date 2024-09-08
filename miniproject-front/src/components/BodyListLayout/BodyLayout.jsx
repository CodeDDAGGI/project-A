import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import MainListLayout from '../List/MainListLayout/MainListLayout';
import SubListLayout from '../List/SubListLayout/SubListLayout';
import WritePage from '../../pages/News/WritePage/WritePage';

function BodyLayout() {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <MainListLayout />
                <SubListLayout />
            </div>
        </div>
    );
}

export default BodyLayout;