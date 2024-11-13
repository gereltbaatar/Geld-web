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

export const CategoryDiv = ({ item, iconsArray }) => {
  const defaultIcon = iconsArray?.find(
    (iconOne) => iconOne?.name === item?.category_icon
  );

  return (
    <div
      className={`w-10 h-10 rounded-[50%] bg-[${item?.icon_color}] flex items-center justify-center`}
    >
      {defaultIcon?.icon}
    </div>
  );
};
