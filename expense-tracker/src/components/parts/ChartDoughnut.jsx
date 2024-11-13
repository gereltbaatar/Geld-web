"use client";

import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export const ChartDoughnut = () => {
  const data = {
    labels: ["Food", "Bills", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "Loss",
        data: [90, 80, 70, 40, 30],
        backgroundColor: [
          "#E74694",
          "#1C64F2",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // This hides the legend
      },
      tooltip: {
        // You can configure tooltips here if needed
      },
    },
  };

  return (
    <div className="bg-white rounded-[18px]">
      <div className="flex justify-between px-6 py-4">
        <p className="font-roboto font-bold not-italic text-base text-[#0F172A]">
          Income - Expense
        </p>
        <p className="font-roboto font-normal not-italic text-base text-[#6B7280]">
          Jun 1 - Nov 30
        </p>
      </div>
      <div className="w-full border-[0.5px]"></div>
      <div className="px-6 py-8">
        <div className="w-40 h-40">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
