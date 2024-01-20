import Image from "next/image";
import Underline from "@/app/Assets/Icons/Vector 18.svg";
import line from "@/app/Assets/Icons/line1.svg";
import Link from "next/link";
import { data, portfolioPhoto } from "./Data";

const Portfolio = () => {
  return (
    <div className=" bg-primary_bg pt-12 pb-28">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-4xl font-nunito font-black leading-10 text-primary_heading1 capitalize">
          Our Portfolio
        </h2>
        <Image src={Underline} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-16">
        <div className="w-full lg:w-1/4 text-primary_heading1 capitalize font-nunito font-semibold pl-2 ">
          <ul className="flex flex-row flex-wrap lg:flex-col justify-between md:gap2 lg:gap-5">
            {data.map(({ id, label, url }) => (
              <li
                key={id}
                className="flex gap-4 items-center hover:justify-between pr-2"
              >
                <Link
                  href={url}
                  className="hover:text-primary_heading2 active:text-primary_heading2"
                >
                  {label}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[3/4] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center mt-5 lg:mt-0">
          {portfolioPhoto.map(({ id, photoUrl }) => (
            <div key={id}>
              <Image width={170} height={150} src={photoUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
