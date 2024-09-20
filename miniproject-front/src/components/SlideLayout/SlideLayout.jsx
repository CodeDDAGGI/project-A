/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SlideLayout(props) {
    return (
        <>
            <div css={s.slidingBannerContainer}>
                <div css={s.mainImageWrap}>
                    <img src="https://image.zdnet.co.kr/2024/07/02/1c94d6c90529809e19639bd2e4d0e4f2-watermark.jpg" alt="" />
                    <div css={s.mainImageText}>
                        <h1>3세대 접어든 니콘 중급 미러리스, 세미 프로 넘본다</h1>
                    </div>
                </div>
                <div css={s.subImageWrap}>
                    <div css={s.subImage}>
                        <img src="https://image.zdnet.co.kr/2024/08/11/cf615451090ffed1bf61b7c826990283.jpg" alt="" />
                        <img src="https://image.zdnet.co.kr/2024/07/30/92d94841dcdd1d943e20f00c5700fd08.jpg" alt="" />
                    </div>
                    <div css={s.subImage}>
                        <img src="https://image.zdnet.co.kr/2024/08/12/982a24f5b562eacbebfe1ae8f8bd6ed7.jpg" alt="" />
                        <img src="https://image.zdnet.co.kr/2020/02/10/hjyoo_kekkptMNafbGae.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlideLayout;