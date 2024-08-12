import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { SAMPLE_LIST } from '../../../constants/LISTSAMPLE.js';

function SubListLayout(props) {
    return (
        <div css={s.layout}>
            {/* <h2>지금뜨는 기사</h2> */}
            <div css={s.container}>
                <div css={s.dataContainer}>
                    <img src="https://adv.zdnet.co.kr/RealMedia/ads/Creatives/zdnet/zd_300260_LGU_240527/zd_300260.png" alt="" />
                    <h3>실시간 인기</h3>
                    <div css={s.lineContainer}>
                        {SAMPLE_LIST.map((product, idx) =>
                        (
                            <ul key={idx}>
                                <li>{idx + 1}</li>
                                <li>{product.text}</li>
                            </ul>
                        )
                        )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SubListLayout;