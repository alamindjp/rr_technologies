import Image from "next/image";
import React from "react";
import webIcon from "@/app/Assets/Icons/graphic-design.svg";
import arrowIcon from "@/app/Assets/Icons/forward_arrow.svg";
import shoppingCart from "@/app/Assets/Icons/shopping-cart.svg";
import appIcon from "@/app/Assets/Icons/app_icon.svg";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:8 ">
      <div className="h-[178px] w-[246px] shadow-md border-t-[10px] rounded border-primary_heading2 bg-primary_heading1 text-white">
        <div className="pl-3">
          <div className="w-6 h-6 my-3">
            <Image src={webIcon} alt="" />
          </div>
          <h3 className=" text-md font-roboto font-bold capitalize w-[156px]">
            Web Design & Web Development
          </h3>
          <div className="flex justify-end pr-5">
          <div className="h-10 w-10 bg-primary_heading2 flex items-center justify-center my-4">
            <Image src={arrowIcon} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="h-[178px] w-[246px] shadow-md border-t-[10px] rounded border-primary_heading2 text-primary_heading1 bg-primary_bg">
        <div className="pl-3">
          <div className="w-6 h-6 my-3">
            <Image src={shoppingCart} alt="" />
          </div>
          <h3 className=" text-md font-roboto font-bold capitalize w-[156px]">
            E-commerce Solutions
          </h3>
          <div className="flex justify-end pr-5">
          <div className="h-10 w-10 bg-primary_heading2 flex items-center justify-center my-4">
            <Image src={arrowIcon} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="h-[178px] w-[246px] shadow-md border-t-[10px] rounded border-primary_heading2 text-primary_heading1 bg-primary_bg">
        <div className="pl-3">
          <div className="w-6 h-6 my-3">
            <Image src={appIcon} alt="" />
          </div>
          <h3 className=" text-md font-roboto font-bold capitalize w-[200px]">
          Customized application development
          </h3>
          <div className="flex justify-end pr-5">
          <div className="h-10 w-10 bg-primary_heading2 flex items-center justify-center my-4">
            <Image src={arrowIcon} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="h-[178px] w-[246px] shadow-md border-t-[10px] rounded border-primary_heading2 text-primary_heading1 bg-primary_bg">
        <div className="pl-3">
          <div className="w-6 h-6 my-3">
            <Image src={shoppingCart} alt="" />
          </div>
          <h3 className=" text-md font-roboto font-bold capitalize w-[220px]">
          Search Engine Optimization & Digital Marketing
          </h3>
          <div className="flex justify-end pr-5">
          <div className="h-10 w-10 bg-primary_heading2 flex items-center justify-center my-4">
            <Image src={arrowIcon} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
