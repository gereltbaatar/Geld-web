"use client";

import { useState, useEffect } from "react";
import { Header, Loader, RecordsLeft, RecordsRight } from "../parts";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
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

const RecordsPage = () => {
  const [recordData, setRecordData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  ///////////////////////////////////////////////////////////////////////////////

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

  ///////////////////////////////////////////////////////////////////////////////

  const fetchDataOne = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/records`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const arrayData = data.recordsData;
      setRecordData(arrayData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataTwo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_ENDPOINT}/category`);
      if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }

      const dataTwo = await response.json();
      const arrayData = dataTwo.categoryData;
      setCategoryData(arrayData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setLoading(false);
    if (!isLoggedIn) {
      toast.warning("Login please!");
      router.push("/");
    }
    fetchDataOne();
    fetchDataTwo();
  }, [router]);

  ///////////////////////////////////////////////////////////////////////////////

  if (loading === true) {
    return <Loader />;
  }

  return (
    <main className="h-full bg-base100">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="container m-auto">
          <div className="px-[120px] flex flex-col gap-6">
            <div className="flex gap-6">
              <RecordsLeft
                setCategoryData={setCategoryData}
                categoryData={categoryData}
                iconsArray={iconsArray}
              />
              <div className="w-full">
                <RecordsRight
                  recordData={recordData}
                  categoryData={categoryData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecordsPage;
