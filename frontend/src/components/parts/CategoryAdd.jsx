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
import { useState } from "react";
import { ArrowDropDown } from "../svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

export const CategoryAdd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="hover:bg-[#F9FAFB]">
        <div className="flex px-4 py-[11px] rounded-lg border border-base300 bg-base100">
          <div className="flex gap-1 ">
            <HouseOneIcon />
            <ArrowDropDown />
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col gap-6">
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
            {/* <Button onClick={handleClose}></Button> */}
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
