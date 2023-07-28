import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    {/* Icon */}
    <div
      className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}
    >
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="icon" />
    </div>
    {/* Text */}
    <div className="flex-1">
      <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      {/* Text Header */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
          enim consequatur maiores ipsam voluptate eaque quo, architecto in quis
          provident optio laudantium nulla possimus fugit aperiam veniam, facere
          nemo.
        </p>
        <Button styles="mt-10">Get Started</Button>
      </div>

      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
