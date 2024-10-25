"use client";

import { InputL } from "../parts";
import { PlusIconBlue } from "../svg";

export const AddCategoryButton = () => {
  return (
    // <button className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px]">
    //   <PlusIconBlue />
    //   <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
    //     Add Category
    //   </p>
    // </button>

    <div className="">
      <button
        className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px]"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <PlusIconBlue />
        <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
          Add Category
        </p>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <div className="flex justify-between py-5 px-6 border border-x-0 border-t-0">
            <h3 className="font-roboto font-bold not-italic text-xl text-[#0F172A]">
              Add Category
            </h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          <div className="p-6">
            <div className=""></div>
            <div className="">
              <InputL placeholder={"Name"} />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
