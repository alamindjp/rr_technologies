import Image from "next/image";
import Earth from "../../../Assets/Images/earthLogo.png";
import Ellipse from "../../../Assets/Images/Ellipse.png";
import mouseIcon from "../../../Assets/Icons/mouse_icon.svg";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="h-screen banner_background my-auto flex w-full">
    <div className="h-screen banner_img flex w-full items-end pb-20 md:pb-10">
      {/* <div className="h-[750px] flex flex-col items-center relative">
        <Image
          src={Earth}
          height="350"
          width="350"
          alt=""
          className=" absolute top-36 p-8 md:p-0"
        />
        <Image
          src={Ellipse}
          height="500"
          width="700"
          alt=""
          className=" absolute top-[300px]"
        />
      </div> */}
      <div className="flex w-full justify-center">
        <div className="w-[450px] md:w-[660px] px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-nunito font-black text-center text-primary_heading1">
          Welcome to <span className=" text-primary_heading2">RR</span>{" "}
          Technologies
        </h1>
        <p className="text-center text-primary_paragraph1 mt-10 md:mt-20">
          Are you facing difficulties with your website? Do you have a website
          but lack traffic? No need to worry.
        </p>
        <Link href="/" className="flex justify-center mt-5"><button className=" bg-primary_heading1 text-white py-2 px-3 text-sm font-bold rounded-lg">Get Start</button></Link>
        <div className="flex justify-center mt-16">
        <Image src={mouseIcon} alt="" className="" />
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
