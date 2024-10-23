import { MiniEyeIcon } from "../categorySvg";

export const CategoryCom = ({ text }) => {
  return (
    <div className="px-3 flex items-center gap-2">
      <div className="w-5 h-5 flex items-center justify-center">
        <MiniEyeIcon />
      </div>
      <div className="">
        <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
          {text}
        </p>
      </div>
    </div>
  );
};
