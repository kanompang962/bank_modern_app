import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`flex-col relative ${styles.paddingY} ${styles.flexCenter}`}
    >
      {/* Gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      {/* Text */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`text-left max-w-[450px] ${styles.paragraph}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            atque numquam ex perferendis eveniet voluptates sint cupiditate?
            Quis voluptatibus sed harum maiores hic amet sequi id. Minima
            doloremque excepturi officia!
          </p>
        </div>
      </div>
      {/* List Card */}
      <div className="flex flex-row flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
