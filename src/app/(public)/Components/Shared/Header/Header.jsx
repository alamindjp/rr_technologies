"use client";
import Image from "next/image";
import Logo from "../../../../Assets/Icons/logo.svg";
import { NavItem } from '../../../../Assets/Data/MenuItems';
import xIcon from "../../../../Assets/Icons/x.png";
import barIcon from "../../../../Assets/Icons/ion_menu.svg";
import RightIcon from "../../../../Assets/Icons/right-icon.svg";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="sticky top-0 font-nunito z-10">
      <div className="container px-7 md:px-0 mx-auto flex justify-between items-center py-4">
        <div className=" w-1/3">
          <Image src={Logo} alt="" />
        </div>
        <div className="w-2/3 hidden md:block">
          <div className="flex justify-between items-center">
            <ul className="flex gap-5 lg:gap-14">
              {NavItem.map(({ id, label, href }) => (
                <li key={id}>
                  <Link href={href} className="hover:border-b-2 border-primary_heading2 pb-1">{label}</Link>
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
          <Image src={!openMenu ? barIcon : xIcon} className="mx-auto" alt="" />
        </button>
        <ul className={`${openMenu?"block":"hidden"}`}>
              {NavItem.map(({ id, label, href }) => (
                <li key={id}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
