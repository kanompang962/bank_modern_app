import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}
      >
        {/* Icon */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img className="w-[32px] h-[32px]" src={discount} />
          <p className={`ml-2 ${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Mount</span> Account
          </p>
        </div>
        {/* Text Header */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
          Payment Method.
        </h1>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          maxime officiis dolores qui. Dolor fuga labore molestias minima, ea
          mollitia fugiat voluptate autem vel
        </p>
      </div>
      {/* Image and gradient */}
      <div
        className={`flex-1 flex md:my-0 my-10 relative ${styles.flexCenter}`}
      >
        <img className="w-[100%] h-[100%] relative z-[5]" src={robot} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* GetStarted Mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
