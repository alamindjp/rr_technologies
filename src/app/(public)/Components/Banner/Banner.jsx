import Image from 'next/image';
import Earth from '../../../Assets/Images/earthLogo.png';
import Ellipse from '../../../Assets/Images/Ellipse.png';

const Banner = () => {
    return (
        <div className='banner_img mt-[-95px]'>
            <div className='h-screen flex flex-col items-center relative'>
                <Image src={Earth} height="350" width="350" alt="" className=' absolute top-36'/>
                <Image src={Ellipse} height="500" width="700" alt="" className=' absolute top-[300px]'/>
            </div>
            <div className=''>
                {/* <h1 className="text-6xl font-sans font-black">Welcome to RR Technologies</h1> */}
            </div>
            
        </div>
    );
};

export default Banner;