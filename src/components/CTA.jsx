import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`flex sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow ${styles.marginY} ${styles.padding} ${styles.flexCenter}`}
    >
      {/* Text */}
      <div className="flex-1">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          illo repudiandae exercitationem accusantium doloribus laborum, ex,
          autem, maiores sapiente nihil perferendis. Ratione dicta pariatur vel
          eaque a omnis provident atque!
        </p>
      </div>
      {/* Button */}
      <div className={`sm:ml-10 ml-0 sm:mt-0 mt-10 ${styles.flexCenter}`}>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default CTA;
