"use client";

import { useState } from "react";
import { CategoryAdd, InputL } from "../parts";
import { Close, PlusIconBlue } from "../svg";
import { useFormik } from "formik";

export const AddCategoryButton = (setCategoryData) => {
  ///////////////////////////////////////////////////////////////////////////////

  const [iconColor, setIconColor] = useState("");
  const [icon, setIcon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;

  ///////////////////////////////////////////////////////////////////////////////

  const formik = useFormik({
    initialValues: {
      name: "",
    },

    onSubmit: async (values) => {
      const requestData = {
        ...values,
        icon_color: iconColor,
        category_icon: icon,
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
        const response = await fetch(`${BACKEND_ENDPOINT}/category`, option);
        if (!response.ok) {
          throw new Error("Failed to create category");
        }
        const data = await response.json();
        setCategoryData((prevCats) => [...prevCats, data]);
        console.log("Response Data:", data);
      } catch (error) {
        setErrorMessage(error);
      }
      document.getElementById("add_category").close();
    },
  });

  return (
    <div className="">
      <button
        className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px]"
        onClick={() => document.getElementById("add_category").showModal()}
      >
        <PlusIconBlue />
        <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
          Add Category
        </p>
      </button>
      <dialog id="add_category" className="modal">
        <div className="modal-box p-0 rounded-lg relative">
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
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6 flex flex-col gap-8 ">
              <div className="flex gap-3">
                <CategoryAdd setIcon={setIcon} setIconColor={setIconColor} />
                <div className="w-full">
                  <InputL
                    id={"name"}
                    name={"name"}
                    type={"text"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder={"Name"}
                    required={"required"}
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="px-3 py-2 w-full bg-[#16A34A] rounded-[20px]"
                >
                  <p className="font-roboto font-normal not-italic text-white">
                    Add
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
