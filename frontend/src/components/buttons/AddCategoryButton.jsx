"use client";

import { useState } from "react";
import { CategoryAdd, InputL } from "../parts";
import { Close, PlusIconBlue } from "../svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const AddCategoryButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px] hover:bg-[#F9FAFB]"
      >
        <PlusIconBlue />
        <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
          Add Category
        </p>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[440px] w-full bg-[#F9FAFB]">
          <div className="p-0 rounded-lg">
            <form>
              <div className="flex justify-between py-5 px-6 border border-x-0 border-t-0">
                <h3 className="font-roboto font-bold not-italic text-xl text-[#0F172A]">
                  Add Category
                </h3>
                <button onClick={handleClose}>
                  <Close />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-8">
                <div className="flex items-center gap-3">
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
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
