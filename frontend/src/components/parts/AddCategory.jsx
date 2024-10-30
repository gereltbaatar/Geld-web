"use client";

import { CategoryAddPlus, CategoryCom } from ".";
import { ArrowDropDown } from "../svg";

export const AddCategory = () => {
  return (
    <div className="">
      <button
        className="w-full flex items-center justify-between self-stretch px-4 py-2 h-12 border border-base300 rounded-lg bg-base100"
        onClick={() => document.getElementById("my_modal").showModal()}
      >
        <p className="text-neutral not-italic text-base font-roboto">
          Find or choose category
        </p>
        <ArrowDropDown />
      </button>
      <dialog id="my_modal" className="modal">
        <div className="modal-box max-w-80 w-full p-0 rounded-lg">
          <div className="flex items-center gap-3 px-4 py-2">
            <CategoryAddPlus />
            <h3 className="font-roboto font-normal text-lg">Add Category</h3>
          </div>
          <div className="w-full border-[0.5px]"></div>
          <div className="px-4">
            <CategoryCom />
            <CategoryCom />
            <CategoryCom />
            <CategoryCom />
            <CategoryCom />
            <CategoryCom />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
