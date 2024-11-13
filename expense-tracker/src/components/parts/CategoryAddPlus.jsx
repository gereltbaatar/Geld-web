"use client";

import { CategoryAdd, InputL } from "../parts";
import { Close, PlusIconBlue } from "../svg";

export const CategoryAddPlus = () => {
  return (
    <div className="">
      <button
        onClick={() => document.getElementById("add_category").showModal()}
        className="flex w-full items-center justify-start gap-2 p-2 rounded-[20px]"
      >
        <PlusIconBlue />
      </button>
    </div>
  );
};
