"use client";

import { useState, useEffect } from "react";
import { Header, RecordsLeft, RecordsRight } from "../parts";

const RecordsPage = () => {
  const [recordData, setRecordData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;

  async function fetchDataOne() {
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
  }

  async function fetchDataTwo() {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/category`);
      if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }

      const dataTwo = await response.json();
      const arrayData = dataTwo.categoryData;
      setCategoryData(arrayData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchDataOne();
    fetchDataTwo();
  }, [recordData, categoryData]);
  return (
    <main className="h-full bg-base100">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="container m-auto">
          <div className="px-[120px] flex flex-col gap-6">
            <div className="flex gap-6">
              <RecordsLeft categoryData={categoryData} />
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
