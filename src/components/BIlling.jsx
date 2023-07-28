import React from "react";
import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";

const BIlling = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      {/* Image and Gradient */}
      <div className={`${layout.sectionImgReverse}`}>
        <img
          className="w-[100%] h-[100%] relative z-[5]"
          src={bill}
          alt="billing"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      {/* Text */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          impedit illo esse, id officia voluptates corrupti quia perspiciatis
          eum optio aliquid culpa consequatur atque assumenda labore fugiat,
          quasi vitae animi.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-x-5">
          <img
            className="w-[126px] h-[42px] object-contain cursor-pointer"
            src={apple}
            alt="apple_store"
          />
          <img
            className="w-[126px] h-[42px] object-contain cursor-pointer"
            src={google}
            alt="goole_store"
          />
        </div>
      </div>
    </section>
  );
};

export default BIlling;
