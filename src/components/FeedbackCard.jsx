import React from "react";
import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ title, name, content, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 mr-0 my-5 feedback-card">
    {/* Icon */}
    <img className="w-[42px] h-[27px] object-contain" src={quotes} />
    {/* Text */}
    <p
      className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10 ${styles.paragraph}`}
    >
      {content}
    </p>
    {/* Personal */}
    <div className="flex flex-row">
      <img className="w-[48px] h-[48px] rounded-full" src={img} alt={name} />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
