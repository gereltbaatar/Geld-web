"use client";

import { MiniEyeIcon } from "../categorySvg";
import React, { useState } from "react";
import { EyeClosed } from "../svg";

export const CategoryFilter = ({ text }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="px-3">
      <button className="flex items-center gap-2" onClick={toggle}>
        <div className="w-5 h-5 flex items-center justify-center">
          {isToggled ? <EyeClosed /> : <MiniEyeIcon />}
        </div>
        <div className="">
          <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
            {text}
          </p>
        </div>
      </button>
    </div>
  );
};
