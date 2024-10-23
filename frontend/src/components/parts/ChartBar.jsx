"use client";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const ChartBar = () => {
  const data = {
    labels: ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [1000000, 2000000, 2800000, 500000, 300000, 700000, 2000000],
        borderWidth: [4],
      },
      {
        label: "Loss",
        data: [775490, 434280, 2323470, 432432, 234342, 423423, 34256],
      },
    ],
  };
  return (
    <div className="bg-white rounded-[18px]">
      <div className="px-6 py-4">
        <p className="font-roboto font-bold not-italic text-base text-[#0F172A]">
          Income - Expense
        </p>
      </div>
      <div className="w-full border-[0.5px]"></div>
      <div className="px-6 py-8">
        <div className="h-40">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};
