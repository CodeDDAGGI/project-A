import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function SlidingBanner(props) {
    return (
        <div css={s.swiperContainer}>
            <Swiper
                css={s.swiper}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlidingBanner;