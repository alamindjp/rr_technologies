import Image from "next/image";
import Logo from "../../../../Assets/Icons/logo.svg";
import { NavItem } from "../../../../Assets/Data/MenuItems";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" sticky top-0 font-nunito">
      <div className="container px-7 md:px-0 mx-auto flex md:justify-between items-center py-4">
        <div className=" w-1/3">
          <Image src={Logo} alt="" />
        </div>
        <div className="w-2/3 hidden md:block">
          <div className="flex justify-between items-center">
            <ul className="flex gap-5 lg:gap-14">
              {NavItem.map(({ id, label, href }) => (
                <li key={id}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact_us"
              className="btn btn-primary bg-primary_heading2 py-3 px-10 rounded-full text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="block md:hidden"> 
        X
        </div>
      </div>
    </div>
  );
};

export default Header;
