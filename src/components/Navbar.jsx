import React, { useState } from "react";
import { navLinks } from "../constants/index";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      {/* Logo */}
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />
      {/* List Menu */}
      <ul className="hidden sm:flex flex-1 justify-end items-center list-none ">
        {navLinks.map((item, idx) => (
          <li
            key={item.id}
            className={`font-poppins font-normal text-[16px] text-white ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            } cursor-pointer`}
          >
            <a href={`#${item.id}`}> {item.title}</a>
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
        />
        {/* List Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col flex-1 justify-end items-center list-none ">
            {navLinks.map((item, idx) => (
              <li
                key={item.id}
                className={`font-poppins font-normal text-[16px] text-white ${
                  idx === navLinks.length - 1 ? "mr-0" : "mb-4"
                } cursor-pointer`}
              >
                <a href={`#${item.id}`}> {item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
