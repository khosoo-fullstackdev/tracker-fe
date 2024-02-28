import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Body() {
  const doughnutData = {
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const barData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [27532, 5436, 234, 23623, 234, 6875, 3235],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Expense",
        data: [235748, 43732, 24326, 65733, 234235, 6432, 2344],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="flex flex-col w-[100%] m-auto px-[120px]">
      <div className="flex  py-[24px] justify-between">
        <img
          className="w-[384.12px] h-[219.66px] rounded-tl-[18px] rounded-bl-[18px]"
          src="/card.png"
        ></img>
        <div className="w-[384.12px] h-[219.66px] rounded-tl-[18px] rounded-bl-[18px]">
          <div className="flex items-center align-center gap-2 text-slate-900 text-base font-semibold leading-normal">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 124" cx="4" cy="4" r="4" fill="#84CC16" />
            </svg>
            Your Income
          </div>
          <div className="divider"></div>
        </div>
        <div className="w-[384.12px] h-[219.66px] rounded-tl-[18px] rounded-bl-[18px]"></div>
      </div>
      <div className="flex w-[100%] justify-between">
        <div className="flex flex-col w-[588px] h-[284px] bg-red-100 m-auto">
          <p className="text-slate-900 text-base font-semibold leading-normal">
            Income - Expense
          </p>
          <div className="divider"></div>
          <Bar className="h-[100%]" data={barData} />
        </div>
        <div className="flex flex-col w-[588px] h-[284px] bg-red-100 m-auto">
          <p className="text-slate-900 text-base font-semibold leading-normal">
            Income - Expense
          </p>
          <div className="divider"></div>
          <Doughnut className="h-[100%]" data={doughnutData} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
