"use client";

import { useFormik } from "formik";
import { AddCategory, InputL } from "../parts";
import { Close, PlusIcon } from "../svg";
import { useState } from "react";

export const AddRecords = ({ categoryData, iconsArray }) => {
  const [transactionType, setTransactionType] = useState("EXP");
  const [errorMessage, setErrorMessage] = useState("");

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;

  const toggleTransactionType = (type) => {
    setTransactionType(type);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      description: "",
      userId: "",
    },

    onSubmit: async (values) => {
      const requestData = {
        ...values,
        transaction_type: transactionType,
      };

      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },

        body: JSON.stringify(requestData),
      };

      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/records`, option);
        if (!response.ok) {
          throw new Error("Failed to create record");
        }
        const data = await response.json();
      } catch (error) {
        setErrorMessage("Network error");
      }
      document.getElementById("add_records").close();
    },
  });

  return (
    <div className="">
      <button
        className="flex w-full items-center justify-center bg-blue gap-1 px-3 py-1 rounded-[20px]"
        onClick={() => document.getElementById("add_records").showModal()}
      >
        <PlusIcon />
        <p className="font-roboto font-normal not-italic text-base text-white">
          Add
        </p>
      </button>
      <dialog id="add_records" className="modal">
        <div className="p-0 rounded-lg max-w-[744px] bg-white">
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
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2">
              <div className="px-6 py-5 w-full">
                <div className="h-full flex flex-col gap-8 justify-between">
                  <div className="h-full flex flex-col gap-5">
                    <div className="bg-base100 h-10 rounded-[100px] grid grid-cols-2">
                      <button
                        className={`flex-1 py-2 font-semibold rounded-[100px] transition ${
                          transactionType === "EXP"
                            ? "bg-[#0166FF] text-white"
                            : "bg-base100 text-gray-700"
                        }`}
                        type="button"
                        onClick={() => toggleTransactionType("EXP")}
                      >
                        Expense
                      </button>
                      <button
                        className={`flex-1 py-2 font-semibold rounded-[100px] transition ${
                          transactionType === "INC"
                            ? "bg-[#16A34A] text-white"
                            : "bg-base100 text-gray-700"
                        }`}
                        type="button"
                        onClick={() => toggleTransactionType("INC")}
                      >
                        Income
                      </button>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="not-italic text-base font-normal font-roboto">
                          Amount
                        </p>
                        <input
                          id="amount"
                          name="amount"
                          type={"number"}
                          value={formik.values.amount}
                          onChange={formik.handleChange}
                          className="w-full flex items-center self-stretch px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 text-neutral not-italic text-base font-roboto outline-none"
                          placeholder={"₮ 000.00"}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="not-italic text-base font-normal font-roboto">
                          Category
                        </p>
                        <div className="relative">
                          <AddCategory
                            categoryData={categoryData}
                            iconsArray={iconsArray}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="not-italic text-base font-normal font-roboto">
                            Date
                          </p>
                          <input
                            type={"date"}
                            className="w-full flex items-center self-stretch justify-center px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 text-neutral not-italic text-base font-roboto outline-none"
                            placeholder={"₮ 000.00"}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="not-italic text-base font-normal font-roboto">
                            Time
                          </p>
                          <input
                            type={"time"}
                            className="w-full flex items-center self-stretch justify-center px-4 py-2 h-12 border border-base300 rounded-lg bg-base100 text-neutral not-italic text-base font-roboto outline-none"
                            placeholder={"₮ 000.00"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-2 text-white font-semibold rounded-[100px] ${
                      transactionType === "EXP"
                        ? "bg-[#0166FF]"
                        : "bg-[#16A34A]"
                    } transition duration-200`}
                  >
                    Add Record
                  </button>
                </div>
              </div>
              <div className="p-6 pt-5 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <p className="not-italic text-base font-normal font-roboto">
                    Name
                  </p>
                  <InputL
                    htmlFor={"name"}
                    id={"name"}
                    name={"name"}
                    type={"text"}
                    placeholder={"Write here"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="">
                  <div className="flex flex-col gap-1">
                    <p className="not-italic text-base font-normal font-roboto">
                      Note
                    </p>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Write here"
                      className="w-full max-h-60 h-full p-4 resize-none outline-none  border border-base300 bg-base100 rounded-lg font-roboto font-normal not-italic text-[#94A3B8]"
                      cols="30"
                      rows="10"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
