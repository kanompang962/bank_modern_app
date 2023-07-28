import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section id="" className={layout.section}>
      {/* Text */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
          voluptatum tempora dolore explicabo voluptas quo, natus quibusdam
          omnis est fugiat amet corporis reiciendis id rerum impedit!
          Exercitationem, odit officiis.
        </p>
        <Button styles="mt-10">Get Started</Button>
      </div>
      {/* Image */}
      <div className={layout.sectionImg}>
        <img
          className="w-[100%] h-[100%] object-contain"
          src={card}
          alt="card"
        />
      </div>
    </section>
  );
};

export default CardDeal;
