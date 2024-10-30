import { AddCategoryButton, AddRecords } from "../buttons";
import { CategoryFilter, Search } from "../parts";

export const RecordsLeft = () => {
  return (
    <div className="max-w-[260px] w-full py-6 px-4 border border-base200 bg-[#F9FAFB] rounded-xl ">
      <div className="flex flex-col items-start gap-6">
        <div className="font-roboto font-bold not-italic text-2xl">Records</div>
        <div className="w-full">
          <AddRecords />
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
            <CategoryFilter text={"Food & Drinks"} />
            <CategoryFilter text={"Shopping"} />
            <CategoryFilter text={"Housing"} />
            <CategoryFilter text={"Transportation"} />
            <CategoryFilter text={"Vehicle"} />
            <CategoryFilter text={"Life & Entertainment"} />
            <CategoryFilter text={"Communication, PC"} />
            <CategoryFilter text={"Financial expenses"} />
            <CategoryFilter text={"Investments"} />
            <CategoryFilter text={"Income"} />
            <CategoryFilter text={"Others"} />
          </div>
          <AddCategoryButton />
        </div>
      </div>
    </div>
  );
};
