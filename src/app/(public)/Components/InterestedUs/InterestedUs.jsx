import Image from "next/image";
import React from "react";
import image from "../../../Assets/Images/18824957-ai 1.svg";
import clientIcon from "../../../Assets/Icons/clients_icon.svg";
import companyIcon from "../../../Assets/Icons/company_icon.svg";
import experienceIcon from "../../../Assets/Icons/experience_icon.svg";
import projectIcon from "../../../Assets/Icons/project_icon.svg";
import Link from "next/link";

const InterestedUs = () => {
  return (
    <section className=" bg-primary_bg py-24">
      <div className="container mt-5 mx-auto">
        <div className="">
          <div className="capitalize ">
            <h3 className="w-[250px] mx-auto text-2xl font-bold font-roboto text-center text-primary_heading2">
              Thank you for your interest in us!
            </h3>

            <h2 className="text-2xl px-3 md:text-4xl font-nunito font-black md:w-[780px] mx-auto text-center mt-5 text-primary_heading1">
              Founded over 7 years ago, RR Technologies is now the main
              <span className="text-span"> web design </span>
              and <span className="text-span"> web development</span> agency in
              Bangladesh.
            </h2>
            <p className="text-center text-primary_paragraph2 mt-5 px-2">
              Technology and business fused together can bear fruitful results
              talking in terms of business flourishing and success. And this is
              what exactly we aim to deliver to our esteemed clients, offering
              our mix of reliability, capability, and longevity to get your
              website blossoming. We at RR Technologies excel in the area of
              digital marketing, web software, web development, web designing,
              and other web solutions that you may consider availing for your
              website growth.
            </p>
            <div className=" mt-20 flex flex-col-reverse md:flex-row items-center">
              <div className="w-full relative md:w-1/2 text-primary_paragraph2 px-4 py-4 md:px-0 md:pr-5 pt-10 md:pt-0">
                <p className="">
                  Are you facing difficulties with your website? Do you have a
                  website but lack traffic? No need to worry. We at RR
                  Technologies use our technological expertise amalgamated with
                  our experience to scoop out the right potion of success for
                  your firm. We are highly passionate about our work and leave
                  no stones unturned to delight our customers with high-quality
                  work and efficient project management that comes as a surprise
                  bearing bounteous outcomes. Owing to the years of expertise in
                  web development and web designing, our in-house professionals
                  have been highly successful in catering projects. May it be
                  your small size or large-scale business; we excel in providing
                  you with the best interactive surfaces.
                </p>
                <div className="h-16 w-full absolute bg-white/70 bottom-0 left-0">
                  <div className=" flex justify-center mt-10">
                    <Link
                      href="/"
                      className=" bg-primary_heading1 py-2 text-sm px-5 text-white rounded-lg"
                    >
                      show more..
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                src={image}
                alt=""
                className="w-full md:w-1/2 px-4 md:px-0 md:pl-10"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 items-end justify-items-center pt-24">
              <div>
                <Image
                  src={projectIcon}
                  alt=""
                  className="w-[80px] h-[80px] mx-auto pb-2"
                />
                <p className="text-center pb-10 md:pb-0 text-primary_heading1 text-2xl font-bold">project <span className=" text-primary_paragraph2 text-base">  <br />65+</span></p>
              </div>
              <div>
                <Image
                  src={clientIcon}
                  alt=""
                  className="w-[80px] h-[80px] mx-auto pb-2"
                />
                <p className="text-center pb-10 md:pb-0 text-primary_heading1 text-2xl font-bold">client <span className=" text-primary_paragraph2 text-base">  <br />30+</span></p>
              </div>
              <div>
                <Image
                  src={experienceIcon}
                  alt=""
                  className="w-[80px] h-[80px] mx-auto pb-2"
                />
                <p className="text-center pb-10 md:pb-0 text-primary_heading1 text-2xl font-bold">experience <span className=" text-primary_paragraph2 text-base">  <br />7years+</span></p>
              </div>
              <div>
                <Image
                  src={companyIcon}
                  alt=""
                  className="w-[80px] h-[80px] pb-2"
                />
                <p className="text-center pb-10 md:pb-0 text-primary_heading1 text-2xl font-bold">company <span className=" text-primary_paragraph2 text-base">  <br />15+</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestedUs;
