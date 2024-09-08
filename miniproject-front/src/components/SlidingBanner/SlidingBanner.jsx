import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SlideLayout from '../SlideLayout/SlideLayout';

function SlidingBanner(props) {
    return (
        <div css={s.swiperContainer}>
            <Swiper
                css={s.swiper}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
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
                <SwiperSlide><SlideLayout /></SwiperSlide>
                <SwiperSlide><SlideLayout /></SwiperSlide>
                <SwiperSlide><SlideLayout /></SwiperSlide>
                <SwiperSlide><SlideLayout /></SwiperSlide>
                <SwiperSlide><SlideLayout /></SwiperSlide>
                <SwiperSlide><SlideLayout /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlidingBanner;