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

export const CategoryAdd = () => {
  return (
    <div className="">
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="flex px-4 py-[11px] rounded-lg border border-base300 bg-[#F9FAFB]"
      >
        <div className="flex gap-1">
          <HouseOneIcon />
          <ArrowDropDown />
        </div>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-6 max-w-[312px] rounded-lg">
          <div className="flex flex-col gap-6 ">
            <div className="grid grid-cols-6 gap-6">
              <HouseOneIcon />
              <HouseTwoIcon />
              <IdentificationBadge />
              <IdentificationCard />
              <Ladder />
              <IntersectSquare />
              <ImageSquare />
              <MagnifyingGlassPlus />
              <Microphone />
              <MicrosoftExcelLogo />
              <Notepad />
              <ListPlus />
              <Leaf />
              <NumberFive />
              <NumberCircleSeven />
              <RoadHorizon />
              <HourglassSimpleMedium />
              <AnchorSimple />
              <BezierCurve />
              <Exclude />
              <Vignette />
              <Baseball />
              <Question />
              <Exam />
              <Watch />
              <GlobeSimple />
              <OrangeSlice />
              <Peace />
              <ToiletPaper />
              <Pencil />
            </div>
            <div className="border-[0.5px]"></div>
            <div className="flex justify-between">
              <div className="bg-ellipse130 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse131 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse132 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse133 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse134 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse135 w-6 h-6 rounded-[50%]"></div>
              <div className="bg-ellipse136 w-6 h-6 rounded-[50%]"></div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
