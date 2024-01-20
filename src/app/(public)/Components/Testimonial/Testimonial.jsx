import React from "react";
import iconParkLeft from "@/app/Assets/Icons/icon-park-outline_quote_left.png";
import iconPark from "@/app/Assets/Icons/icon-park-outline_quote_right.png";
import Image from "next/image";
import { data } from "./Data";

const Testimonial = () => {
  return (
    <section className="pt-20 pb-28 bg-primary_bg relative">
        <div className=" absolute choose_us_bg bottom-0 left-0"></div>
        <div className=" absolute testimonial_bg bottom-1/2 md:bottom-0 right-0"></div>
      <h2 className="text-4xl flex justify-center font-nunito font-black text-primary_heading1">
        <span>
          <Image src={iconPark} alt="" />
        </span>
        Testimonial
        <span className="flex items-end">
          <Image src={iconParkLeft} alt="" />
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 w-90 md:w-full md:px-3 lg:w-[90%] mx-auto pt-24">
        {data.map(({ id, name,photoUrl,details }) => (
          <div key={id} className="testimonial_card z-[100]">
            <div className="w-16 mx-auto">
              <Image height={38} width={38} src={photoUrl} alt="" />
            </div>
            <div className="w-[85%] pt-2">
              <h4 className=" text-primary_heading1 font-semibold pb-3">{name}</h4>
              <p className="text-sm text-primary_paragraph2">
                {details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
