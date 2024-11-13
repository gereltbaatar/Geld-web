"use client";

import { CategoryAddPlus, CategoryCom } from ".";
import { ArrowDropDown } from "../svg";
import * as React from "react";
export const AddCategory = ({ categoryData, iconsArray }) => {
  return (
    <details className="dropdown w-full">
      <summary className="w-full flex items-center justify-between self-stretch px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 m-0">
        <p className="text-neutral not-italic text-base font-roboto">
          Find or choose category
        </p>
        <ArrowDropDown />
      </summary>
      <ul className="menu dropdown-content max-w-80 w-full  p-0 rounded-lg bg-white overflow-auto scrollbar-hide border border-base300  max-h-[400px] absolute">
        <div className="">
          <li>
            <div className="flex items-center gap-3 px-4 py-2">
              <CategoryAddPlus />
              <h3 className="font-roboto font-normal text-lg">Add Category</h3>
            </div>
            <div className="w-full border-[0.5px] p-0"></div>
          </li>
          {categoryData.map((item, itemIndex) => {
            return (
              <li key={itemIndex}>
                <CategoryCom item={item} iconsArray={iconsArray} />
              </li>
            );
          })}
        </div>
      </ul>
    </details>
  );
};
