import React from "react";

const Button = ({ children, styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
