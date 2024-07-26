import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import apexbank4 from "../assets/apexbank4.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* // Add the logo image here */}
      <img src={apexbank4} alt="Apexbank Logo" className="w-[124px] h-[32px]" />

      {/* //This navbar list is for screens larger than mobile */}
      <ul className="list-none sm:flex hidden justify-end items center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* //This navbar list is for mobile screens */}
      <ul className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] cursor-pointer onject-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* //This div is for the mobile sidebar that appears when toggle is clicked*/}
        <div
          className={`${
            toggle ? "block" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
