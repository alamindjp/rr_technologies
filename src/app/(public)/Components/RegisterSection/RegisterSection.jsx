import React from "react";
import { InputField, TextareaField } from "./InputField";
import leftImage from "@/app/Assets/Images/Assistant_bot.png";
import leftBgImage from "@/app/Assets/Images/group80.svg";
import Image from "next/image";

const RegisterSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:w-11/12 lg:w-10/12 mx-auto my-32">
      <div className="md:w-1/2 md:pr-10 mx-auto my-auto pb-16">
        <div className=" w-10/12 mx-auto relative">
          <Image
            src={leftBgImage}
            alt=""
            className=" absolute top-0 bottom-0"
          />
          <Image src={leftImage} alt="" />
        </div>
      </div>
      <div className="w-full px-2 md:px-0 md:max-w-[480px] md:w-1/2 mx-auto">
        <div className="bg-primary_bg p-5 rounded-xl">
          <h1 className=" font-nunito text-xl md:text-2xl font-extrabold text-primary_heading2">
            Register interest
          </h1>
          <p className=" text-primary_paragraph1 pt-2">
            Use the form below to contact us. Please be as detailed and precise
            as possible. Include your industry and any specific requests. To
            help us get to know and serve you better, we thank you for first
            giving us a good description of who you are. You can also send an
            email, call us or send us a WhatsApp to make an appointment.
          </p>
          <form className="">
            <div className="flex flex-col gap-2 py-5">
              <InputField
                type="text"
                placeholder="Enter your name"
                label="Name"
                required="true"
              />
              <InputField
                type="text"
                placeholder="Enter your company name"
                label="Company"
                required="true"
              />
              <InputField
                type="text"
                placeholder="Enter your email address"
                label="Email Address"
                required="true"
              />
              <TextareaField
                placeholder="Your message here"
                label="Message"
                required="true"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className=" bg-primary_heading2 py-2 px-10 rounded-full text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
