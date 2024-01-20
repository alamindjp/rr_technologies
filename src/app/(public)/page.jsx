import React from 'react';
import Banner from './Components/Banner/Banner';
import InterestedUs from './Components/InterestedUs/InterestedUs';
import ServiceOffer from './Components/ServiceOffer/ServiceOffer';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import RegisterSection from './Components/RegisterSection/RegisterSection';
import Footer from './Components/Shared/Footer/Footer';

const page = () => (
    <div className='bg-[#EBF0EE]'>
        <Banner />
        <InterestedUs/>
        <ServiceOffer/>
        <ChooseUs/>
        <Portfolio/>
        <Testimonial/>
        <RegisterSection/>
        <Footer/>
    </div>
);

export default page;