import React from 'react';
import Banner from './Components/Banner/Banner';
import InterestedUs from './Components/InterestedUs/InterestedUs';
import ServiceOffer from './Components/ServiceOffer/ServiceOffer';

const page = () => (
    <div className='bg-[#EBF0EE]'>
        <Banner />
        <InterestedUs/>
        <ServiceOffer/>
    </div>
);

export default page;