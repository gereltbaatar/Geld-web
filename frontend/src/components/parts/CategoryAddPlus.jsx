"use client";

import { CategoryAdd, InputL } from "../parts";
import { Close, PlusIconBlue } from "../svg";

export const CategoryAddPlus = () => {
  return (
    <div className="">
      <button
        className="flex w-full items-center justify-start gap-2 p-2 rounded-[20px]"
        onClick={() => document.getElementById("my_modal_25").showModal()}
      >
        <PlusIconBlue />
      </button>
      <dialog id="my_modal_25" className="modal">
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
