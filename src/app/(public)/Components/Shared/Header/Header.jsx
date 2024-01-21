"use client";
import Image from "next/image";
import Logo from "../../../../Assets/Icons/logo.svg";
import { NavItem } from "../../../../Assets/Data/MenuItems";
import xIcon from "../../../../Assets/Icons/x.png";
import barIcon from "../../../../Assets/Icons/ion_menu.svg";
import RightIcon from "../../../../Assets/Icons/right-icon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.scrollTo(0,0);

    return () => {
      window.addEventListener("scroll", scrollHandler);
      window.scrollTo(0,0);
    };
  },[]);

  
  return (
    <div
      className={`fixed top-0 left-0 right-0 font-nunito z-[1000] ${openMenu? "bg-nav-bg border-b-2 border-slate-600/20": ""} ${scroll ? "bg-nav-bg border-b-2 border-slate-600/20" : ""}`}
    >
      <div
        className={`bg-nav-bg md:bg-transparent`}
      >
        <div
          className={`container px-7 md:px-0 mx-auto flex justify-between items-center ${
            scroll ? `${openMenu ? "py-4" : "py-1"}` : "py-4"
          }`}
        >
          <div className=" w-1/3">
            <Link href="/"><Image src={Logo} alt="logo" /></Link>
          </div>
          <div className="w-2/3 hidden md:block">
            <div className="flex justify-between items-center">
              <ul className="flex gap-5 lg:gap-14">
                {NavItem.map(({ id, label, href }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="hover:border-b-2 border-primary_heading2 pb-1"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact_us"
                className="btn btn-primary bg-primary_heading2 py-3 px-10 rounded-full text-white hover:text-primary_heading2 hover:bg-inherit"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="block md:hidden h-[44px]  w-[44px] rounded-md bg-slate-500"
            >
              <Image
                src={!openMenu ? barIcon : xIcon}
                className="mx-auto"
                alt=""
              />
            </button>
            {openMenu ? (
              <ul
                className={`flex absolute left-0 right-0 justify-between flex-col mt-2 p-10 bg-nav-bg rounded-md border-b-2 border-slate-600/20`}
              >
                <div className="pb-5">
                  <h2 className="text-2xl font-extrabold uppercase text-primary-title font-rubik ml-[20px]">
                    menu
                  </h2>
                </div>
                {NavItem.map(({ id, label, href }) => (
                  <li key={id} className="mr-[24px] ml-[20px] py-[5px] md:py-0">
                    <Link
                      className="font-poppins text-[14px] font-semibold text-link uppercase tracking-[2px] flex justify-between pb-[16px]"
                      href={href}
                    >
                      {label} <Image src={RightIcon} alt="" />
                    </Link>
                  </li>
                ))}
                <li className="w-full mx-auto">
                  <Link
                    href="/contact_us"
                    className="block text-center bg-primary_heading2 py-3 rounded-full text-white hover:text-primary_heading2"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
