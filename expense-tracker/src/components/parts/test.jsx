import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

<div className="">
  <button
    className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px]"
    onClick={() => document.getElementById("my_modal_3").showModal()}
  >
    <PlusIconBlue />
    <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
      Add Category
    </p>
  </button>
  <dialog id="my_modal_3" className="modal">
    <div className="modal-box p-0 rounded-lg">
      <form method="dialog" className="modal-backdrop">
        <div className="flex justify-between py-5 px-6 border border-x-0 border-t-0">
          <h3 className="font-roboto font-bold not-italic text-xl text-[#0F172A]">
            Add Category
          </h3>
          <button className="btn btn-sm btn-circle btn-ghost">
            <Close />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-8">
          <div className="flex gap-3">
            <CategoryAdd />
            <div className="w-full">
              <InputL placeholder={"Name"} />
            </div>
          </div>
          <div className="w-full">
            <button className="px-3 py-2 w-full bg-[#16A34A] rounded-[20px]">
              <p className="font-roboto font-normal not-italic text-white">
                Add
              </p>
            </button>
          </div>
        </div>
      </form>
    </div>
  </dialog>
</div>;

<React.Fragment>
  <Button
    onClick={handleOpen}
    className="flex w-full items-center justify-start gap-2 px-3 py-1 rounded-[20px] hover:bg-"
  >
    <PlusIconBlue />
    <p className="font-roboto font-normal not-italic text-base text-[#1F2937]">
      Add Category
    </p>
  </Button>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
    <Box sx={{ ...style, width: 200 }}>
      <h2 id="child-modal-title">Text in a child modal</h2>
      <p id="child-modal-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <Button onClick={handleClose}>Close Child Modal</Button>
    </Box>
  </Modal>
</React.Fragment>;

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
    <div method="" className="">
      <button>close</button>
    </div>
  </dialog>
</div>;
