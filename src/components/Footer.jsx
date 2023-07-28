import React from "react";
import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} ${styles.flexCenter}`}
    >
      <div
        className={`flex sm:flex-row flex-col mb-8 w-full ${styles.flexStart}`}
      >
        {/* Logo */}
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img className="w-[266px] h-[72px]" src={logo} alt="logo" />
          <p className={`max-w-[310px] mt-4 ${styles.paragraph}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* List */}
        <div className="flex flex-row flex-[1.5] w-full flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((item) => (
            <div
              key={item.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {item.title}
              </h4>
              <ul className="list-none mt-4">
                {item.links.map((link, index) => (
                  <li
                    className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                      item.links.length - 1 !== index ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* CopyRight */}
      <div className="w-full flex md:flex-row flex-col justify-between items-center pt-6 border-t border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
          2023 Dev. Thianchai Chamnan.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-x-6">
          {socialMedia.map((social, i) => (
            <img
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer`}
              src={social.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
