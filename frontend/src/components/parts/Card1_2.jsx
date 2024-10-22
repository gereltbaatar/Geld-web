import { ArrowCircleUpIcon, EllipseGreenIcon } from "../svg";

export const Card1_2 = () => {
  return (
    <div className=" bg-white rounded-[18px] w-96">
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <EllipseGreenIcon />
          <p className="">Your Income</p>
        </div>
      </div>
      <div className="w-full border-[0.5px]"></div>
      <div className="flex flex-col gap-4 px-6 py-5">
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold not-italic text-4xl">
            1,200,000<span className="">₮</span>
          </p>
          <p className="font-roboto font-normal not-italic text-lg text-slate">
            Your Income Amount
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <ArrowCircleUpIcon />
          <p className="font-roboto font-normal not-italic text-lg">
            32% from last month
          </p>
        </div>
      </div>
    </div>
  );
};
