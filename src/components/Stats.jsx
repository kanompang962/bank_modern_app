import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`flex flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}
    >
      {stats.map((item) => (
        <div
          key={item.id}
          className={`flex-1 flex flex-row items-center justify-start m-3`}
        >
          <h4 className="text-white font-poppins font-semibold xs:text-[40px] text=[30px] xs:leading-[53px] leading-[43px]">
            {item.value}
          </h4>
          <p className="text-gradient font-poppins font-normal xs:text-[20px] text=[15px] xs:leading-[26px] leading-[21px] uppercase ml-3">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
