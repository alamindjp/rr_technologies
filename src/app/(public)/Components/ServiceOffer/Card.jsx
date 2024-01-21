import Image from "next/image";
import React from "react";
import arrowIcon from "@/app/Assets/Icons/forward_arrow.svg";

const Card = ({ item, className }) => {
  const { id, label, photoUrl } = item;
  if (id === 1) {
    className = "bg-primary_heading1 text-white";
  }else{
    className="text-primary_heading1 bg-white"
  }
  return (
    <div
      className={`min-h-48 w-full sm:w-2/3 md:w-full md:max-w-96 mx-auto shadow-md border-t-[10px] rounded border-primary_heading2 z-50 ${className}`}
    >
      <div className="pl-3 min-h-40 relative">
        <div className=" w-10 h-10 my-3">
          <Image width={40} height={40} src={photoUrl} alt="" />
        </div>
        <h3 className=" text-md font-roboto font-bold capitalize w-3/4">
          {label}
        </h3>
        <div className="p-4 rounded-lg bg-primary_heading2 absolute bottom-0 right-3">
          <Image src={arrowIcon} alt="arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
