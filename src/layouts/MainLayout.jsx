import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Importance from '../components/Importance';
import Support from '../components/Support';
import Success from '../components/Success';

const MainLayout = () => {
    return (
        <div className=" bg-base-100  mx-auto overflow-x-hidden">
            <Banner></Banner>
            <About></About>
            <Success></Success>
            <Importance></Importance>
            <Support></Support>
        </div>
    );
};

export default MainLayout;