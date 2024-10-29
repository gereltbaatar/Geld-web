"use client";

import { InputL } from "../parts";
import { Close, PlusIcon } from "../svg";

export const AddRecords = () => {
  return (
    <div className="">
      <button
        className="flex w-full items-center justify-center bg-blue gap-1 px-3 py-1 rounded-[20px]"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <PlusIcon />
        <p className="font-roboto font-normal not-italic text-base text-white">
          Add
        </p>
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box p-0 rounded-lg max-w-[744px]">
          <div className="flex justify-between py-5 px-6 border border-x-0 border-t-0">
            <h3 className="font-roboto font-bold not-italic text-xl text-[#0F172A]">
              Add Record
            </h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <Close />
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-6 py-5 w-full">
              <div className="">1</div>
            </div>
            <div className="p-6 border flex flex-col gap-12">
              <InputL />
              <div className="">
                <textarea
                  name=""
                  className="textarea bg-base100"
                  cols="30"
                  rows="10"
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
