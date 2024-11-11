import {
  HouseOneIcon,
  HouseTwoIcon,
  IdentificationBadge,
  IdentificationCard,
  Ladder,
  IntersectSquare,
  ImageSquare,
  MagnifyingGlassPlus,
  Microphone,
  MicrosoftExcelLogo,
  Notepad,
  ListPlus,
  Leaf,
  NumberFive,
  NumberCircleSeven,
  RoadHorizon,
  HourglassSimpleMedium,
  AnchorSimple,
  BezierCurve,
  Exclude,
  Vignette,
  Baseball,
  Question,
  Exam,
  Watch,
  GlobeSimple,
  OrangeSlice,
  Peace,
  ToiletPaper,
  Pencil,
} from "../categorySvg";
import { ArrowDropDown } from "../svg";

const iconsArray = [
  { icon: <HouseOneIcon />, name: "HouseOneIcon" },
  { icon: <HouseTwoIcon />, name: "HouseTwoIcon" },
  { icon: <IdentificationBadge />, name: "IdentificationBadge" },
  { icon: <IdentificationCard />, name: "IdentificationCard" },
  { icon: <Ladder />, name: "Ladder" },
  { icon: <IntersectSquare />, name: "IntersectSquare" },
  { icon: <ImageSquare />, name: "ImageSquare" },
  { icon: <MagnifyingGlassPlus />, name: "MagnifyingGlassPlus" },
  { icon: <Microphone />, name: "Microphone" },
  { icon: <MicrosoftExcelLogo />, name: "MicrosoftExcelLogo" },
  { icon: <Notepad />, name: "Notepad" },
  { icon: <ListPlus />, name: "ListPlus" },
  { icon: <Leaf />, name: "Leaf" },
  { icon: <NumberFive />, name: "NumberFive" },
  { icon: <NumberCircleSeven />, name: "NumberCircleSeven" },
  { icon: <RoadHorizon />, name: "RoadHorizon" },
  { icon: <HourglassSimpleMedium />, name: "HourglassSimpleMedium" },
  { icon: <AnchorSimple />, name: "AnchorSimple" },
  { icon: <BezierCurve />, name: "BezierCurve" },
  { icon: <Exclude />, name: "Exclude" },
  { icon: <Vignette />, name: "Vignette" },
  { icon: <Baseball />, name: "Baseball" },
  { icon: <Question />, name: "Question" },
  { icon: <Exam />, name: "Exam" },
  { icon: <Watch />, name: "Watch" },
  { icon: <GlobeSimple />, name: "GlobeSimple" },
  { icon: <OrangeSlice />, name: "OrangeSlice" },
  { icon: <Peace />, name: "Peace" },
  { icon: <ToiletPaper />, name: "ToiletPaper" },
  { icon: <Pencil />, name: "Pencil" },
];

export const CategoryAdd = ({ setIcon, setIconColor }) => {
  return (
    <details className="dropdown">
      <summary className="flex px-4 py-[11px] rounded-lg border border-base300 bg-[#F9FAFB] max-w-[84px] relative">
        <div className="flex gap-1">
          <HouseOneIcon />
          <ArrowDropDown />
        </div>
      </summary>
      <ul
        id=" unordered_list"
        className=" bg-base-100 rounded-box z-[1] w-[320px] p-2 shadows border absolute"
      >
        <div className="p-6 w-[312px] rounded-lg">
          <div className="flex flex-col gap-6 ">
            <li>
              <div className="grid grid-cols-6 gap-6">
                {iconsArray.map((item, itemindex) => {
                  return (
                    <button
                      key={itemindex}
                      type="button"
                      onClick={() => setIcon(item?.name)}
                    >
                      {item?.icon}
                    </button>
                  );
                })}
              </div>
            </li>
            <div className="border-[0.5px]"></div>
            <li>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIconColor("#0166FF")}
                  className={`bg-[#0166FF] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#01B3FF")}
                  className={`bg-[#01B3FF] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#41CC00")}
                  className={`bg-[#41CC00] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#F9D100")}
                  className={`bg-[#F9D100] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#FF7B01")}
                  className={`bg-[#FF7B01] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#AE01FF")}
                  className={`bg-[#AE01FF] w-6 h-6 rounded-[50%]`}
                ></button>
                <button
                  type="button"
                  onClick={() => setIconColor("#FF0101")}
                  className={`bg-[#FF0101] w-6 h-6 rounded-[50%]`}
                ></button>
              </div>
            </li>
          </div>
        </div>
        {/* <form method="dialog" className="modal-backdrop"> */}
        <button method="dialog"></button>
        {/* </form> */}
      </ul>
    </details>
  );
};
