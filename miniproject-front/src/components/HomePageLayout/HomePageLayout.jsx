import React from 'react';
import BodyLayout from '../BodyListLayout/BodyLayout';
import CalendarLayout from '../CalendarLayout/CalendarLayout';
import MainLayout from '../MainLayout/MainLayout';

function HomePageLayout(props) {
    return (
        <>
            <Header />
            <SlidingBanner />
            <MainLayout>
                <BodyLayout />
                <CalendarLayout />
            </MainLayout>
        </>
    );
}

export default HomePageLayout;