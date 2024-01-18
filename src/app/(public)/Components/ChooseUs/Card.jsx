import Image from "next/image";
import ExperienceIcon from "@/app/Assets/Icons/experience_icon_choose_us.png";
import teamIcon from "@/app/Assets/Icons/dedicated_team_icon.png";
import rapidIcon from "@/app/Assets/Icons/rapid_time_icon.png";
import priceIcon from "@/app/Assets/Icons/price_icon.png";

const Card = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center md:flex-row gap-5">
        <div className="choose_us_card z-10">
          <Image width="50" height="50" src={ExperienceIcon} alt="" />
          <h3 className=" text-xl text-primary_heading1 capitalize py-3">
            Experience
          </h3>
          <p className="text-sm text-primary_paragraph2">
            Experience counts is a common saying, and hiring us means hiring
            professionals who have years of experience to add on to their kitty
            to get your projects falling at the right place. Also, we have a
            streamlined project management system to cater to your project
            requisites. Getting connected with us allows you to browse over a
            large talent pool who can get your task accomplished within fixed
            deadlines.
          </p>
        </div>
        <div className="choose_us_card z-10">
          <Image width="50" height="50" src={teamIcon} alt="" />
          <h3 className=" text-xl text-primary_heading1 capitalize py-3">
            Dedicated team
          </h3>
          <p className="text-sm text-primary_paragraph2">
            Everyone has their own cup of tea to drink, and thus we do not mix
            up the different areas of functionality. We have dedicated teams for
            designing and graphics. While our web developers get the deigning
            part done, we have our own graphic designing team that handles all
            the quality imagery part for a successful website.
          </p>
        </div>
        <div className="choose_us_card z-10">
          <Image width="50" height="50" src={rapidIcon} alt="" />
          <h3 className=" text-xl text-primary_heading1 capitalize py-3">
            Rapid turnaround time
          </h3>
          <p className="text-sm text-primary_paragraph2">
            We aim at delivering quality work within fixed deadlines and thus
            are committed to delivering solutions when our clients need them
            without making them wait for it and extend beyond the fixed time
            frame. We chalk out our plans accordingly and also regularly update
            our clients regarding the progress to get what you desire. We give
            ears to your vision
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="choose_us_card z-10">
          <Image width="50" height="50" src={priceIcon} alt="" />
          <h3 className=" text-xl text-primary_heading1 capitalize py-3">
            Competitive pricing
          </h3>
          <p className="text-sm text-primary_paragraph2">
            Pricing is one crucial factor that every business owner considers
            while hiring a web development company. We are the best in the
            market and offer competitive pricing to our clients meeting all the
            demands of the clients with higher levels of efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
