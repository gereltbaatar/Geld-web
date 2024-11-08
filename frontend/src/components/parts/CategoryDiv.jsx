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

export const CategoryDiv = ({ item }) => {
  const icon = item.category_icon;

  const iconComponents = {
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
  };

  const IconComponent = iconComponents[icon];

  return (
    <div
      className={`w-10 h-10 rounded-[50%] bg-[${item?.icon_color}] flex items-center justify-center`}
    >
      {IconComponent ? <IconComponent /> : null}
    </div>
  );
};
