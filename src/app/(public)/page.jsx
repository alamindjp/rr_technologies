import React from 'react';
import Banner from './Components/Banner/Banner';
import InterestedUs from './Components/InterestedUs/InterestedUs';
import ServiceOffer from './Components/ServiceOffer/ServiceOffer';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Portfolio from './Components/Portfolio/Portfolio';

const page = () => (
    <div className='bg-[#EBF0EE]'>
        <Banner />
        <InterestedUs/>
        <ServiceOffer/>
        <ChooseUs/>
        <Portfolio/>
    </div>
);

export default page;