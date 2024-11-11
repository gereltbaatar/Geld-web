"use client";

import { AddCategoryButton, AddRecords } from "../buttons";
import { CategoryAddPlus, CategoryFilter, Search } from "../parts";

export const RecordsLeft = ({ setCategoryData, categoryData }) => {
  console.log(categoryData, "categoryData shuuu 3");

  return (
    <div className="max-w-[260px] w-full max-h-[820px] h-full py-6 px-4 border border-base200 bg-[#F9FAFB] rounded-xl ">
      <div className="flex flex-col items-start gap-6">
        <div className="font-roboto font-bold not-italic text-2xl">Records</div>
        <div className="w-full">
          <AddRecords
            setCategoryData={setCategoryData}
            categoryData={categoryData}
          />
        </div>
        <Search />
        <div className="flex flex-col gap-4">
          <p className="font-roboto font-bold not-italic text-base text-[#1F2937]">
            Types
          </p>
          <div>
            <label className="px-3 flex items-center gap-2">
              <input type="radio" name="radio-1" className="radio w-5 h-5" />
              <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
                All
              </p>
            </label>
          </div>
          <div>
            <label className="px-3 flex items-center gap-2">
              <input type="radio" name="radio-1" className="radio w-5 h-5" />
              <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
                Income
              </p>
            </label>
          </div>
          <div>
            <label className="px-3 flex items-center gap-2">
              <input type="radio" name="radio-1" className="radio w-5 h-5" />
              <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
                Expense
              </p>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between">
            <p className="font-roboto font-bold not-italic text-base text-[#1F2937]">
              Category
            </p>
            <button className="font-roboto font-normal not-italic text-base text-[#1F2937] opacity-20">
              Clear
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {categoryData.map((item, itemIndex) => {
              return <CategoryFilter key={itemIndex} text={item?.name} />;
            })}
          </div>
          <div className="relative">
            <AddCategoryButton setCategoryData={setCategoryData} />
          </div>
          {/* <CategoryAddPlus /> */}
        </div>
      </div>
    </div>
  );
};
