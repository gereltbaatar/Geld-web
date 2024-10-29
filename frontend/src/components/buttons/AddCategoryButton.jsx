"use client";

import { CategoryAdd, InputL } from "../parts";
import { Close, PlusIconBlue } from "../svg";

export const AddCategoryButton = () => {
  return (
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
        <div className="modal-box p-0 rounded-lg">
          <div className="flex justify-between py-5 px-6 border border-x-0 border-t-0">
            <h3 className="font-roboto font-bold not-italic text-xl text-[#0F172A]">
              Add Category
            </h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <Close />
              </button>
            </form>
          </div>
          <div className="p-6 flex flex-col gap-8">
            <div className="flex gap-3">
              <CategoryAdd />
              <div className="w-full">
                <InputL placeholder={"Name"} />
              </div>
            </div>
            <div className="w-full">
              <button className="px-3 py-2 w-full bg-[#16A34A] rounded-[20px]">
                <p className="font-roboto font-normal not-italic text-white">
                  Add
                </p>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
