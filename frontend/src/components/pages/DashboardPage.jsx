"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Card1_2,
  Card1_3,
  ChartBar,
  ChartDoughnut,
  Header,
  Loader,
  RecordCom,
} from "../parts";

const HomePage = () => {
  ///////////////////////////////////////////////////////////////////////////////

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  ///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setLoading(false);
    if (!isLoggedIn) {
      toast.warning("Login please!");
      router.push("/login");
    }
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
            <div className="grid grid-cols-3 gap-6 justify-between">
              <div className="bg-blue w-full h-[216px] rounded-[18px]"></div>
              <Card1_2 />
              <Card1_3 />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ChartBar />
              <ChartDoughnut />
            </div>
            <div className="bg-white rounded-[18px]">
              <div className=" px-6 py-4">
                <p className="font-roboto font-bold not-italic text-base text-[#0F172A]">
                  Last Records
                </p>
              </div>
              <div className="w-full border-[0.5px]"></div>
              <div className="px-6">
                <RecordCom />
                <RecordCom />
                <RecordCom />
                <RecordCom />
                <RecordCom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
