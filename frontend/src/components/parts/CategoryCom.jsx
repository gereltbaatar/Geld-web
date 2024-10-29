"use client";

import { MiniEyeIcon } from "../categorySvg";
import React, { useState } from "react";
import { EyeClosed } from "../svg";

export const CategoryCom = ({ text }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="px-3 flex items-center gap-2">
      <div className="w-5 h-5 flex items-center justify-center">
        <button onClick={toggle}>
          {isToggled ? <EyeClosed /> : <MiniEyeIcon />}
        </button>
      </div>
      <div className="">
        <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
          {text}
        </p>
      </div>
    </div>
  );
};
