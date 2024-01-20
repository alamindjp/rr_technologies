import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full p-2 mx-auto text-center text-[#475569] font-medium pb-8'>
            <div className=' h-[1px] w-[70%] bg-[#475569] mx-auto mb-8'></div>
            <p className=''>@Copyright {new Date().getFullYear()} all right reserved by Naimur Rahman Hira</p>
        </footer>
    );
};

export default Footer;