import Image from "next/image";
import React from "react";
import Card from "./Card";

const ServiceOffer = () => {
  return (
    <div className="bg-[#EBF0FF] relative py-20">
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2478FE] to-[#5380EA] absolute top-10 left-1/3 bottom-44"></div>
      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E54A2A] to-[#D91C5E] absolute left-10 md:left-36 bottom-36"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#14E45B] to-[#14C03A] absolute bottom-16 right-10 md:right-40"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div className="w-3/4 mx-auto">
          <h3 className=" text-xl pt-5 text-primary_heading2">
            Services we offer
          </h3>
          <h2 className=" text-4xl font-nunito font-black mt-5 capitalize">
            We believe in true partnership and thus get our <span className=" text-span">customers</span> a bang for
            their bucks. There are various areas in which we function, here are
            a few of them:
          </h2>
        </div>
        <div>
          <div className=" flex justify-center mt-10">
            <Card/>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
