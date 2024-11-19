import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Importance from '../components/Importance';
import Support from '../components/Support';

const MainLayout = () => {
    return (
        <div className=" bg-base-100 w-10/12 mx-auto">
            <Banner></Banner>
            <About></About>
            <Importance></Importance>
            <Support></Support>
        </div>
    );
};

export default MainLayout;