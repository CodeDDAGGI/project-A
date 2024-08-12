import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
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
                <SwiperSlide>
                    <SlideLayout />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlidingBanner;