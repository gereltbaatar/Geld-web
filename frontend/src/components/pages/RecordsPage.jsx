"use client";

import { useState, useEffect } from "react";
import { Header, Loader, RecordsLeft, RecordsRight } from "../parts";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RecordsPage = () => {
  const [recordData, setRecordData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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
