import React from "react";
import { data } from "@/app/(public)/Components/ChooseUs/Data";
import Card from "./Card";

const ChooseUs = () => {
  return (
    <section className="bg-primary_bg py-20">
      <div className=" w-full md:w-[1040px] mx-auto px-5">
        <div>
          <h3 className="text-xl font-bold font-roboto text-primary_heading2 capitalize text-center">
            why choose us
          </h3>
          <h2 className="text-4xl font-black font-nunito capitalize text-center text-primary_heading1 py-2">
            for your web development needs?
          </h2>
          <p className="text-base text-primary_paragraph2 text-center">
            We have passion and love for what we do& we don’t believe in cutting
            corners and setting wrong expectations. We aim at improving with
            each passing day and showcase what we actually are in reality, and
            we do not pretend in any circumstances. There are multiple reasons
            that will make you fall for us for availing top-notch web
            development services. Here are a few of them
          </p>
        </div>
        <div className=" relative h-[400px]">
          <div className="choose_us_bg1 absolute top-[-50px] left-0 md:left-[-130px]"></div>
          <div className="choose_us_bg absolute right-0 bottom-[-150px] md:bottom-[-130px]"></div>
          <div className="">
            {/* {data.map((item) => (
              <Card 
              key={item.id}
              item={item}
              />
            ))} */}
            <Card/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
