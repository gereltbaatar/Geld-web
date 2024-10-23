import { HouseIcon } from "../svg";

export const RecordCom = () => {
  return (
    <div className="py-5 flex justify-between border border-t-[0px] border-x-[0px]">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-[50%] bg-blue flex items-center justify-center">
          <HouseIcon />
        </div>
        <div className="">
          <p className="font-roboto font-normal not-italic text-base">
            Lending & Renting
          </p>
          <p className="font-roboto font-normal not-italic text-xs text-gray-500">
            3 hours ago
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <p className="font-roboto font-bold not-italic text-base text-lime">
          -
        </p>
        <p className="font-roboto font-bold not-italic text-base text-lime">
          1,000<span>₮</span>
        </p>
      </div>
    </div>
  );
};
