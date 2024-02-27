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
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import React from "react";

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
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
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
    <div className="flex flex-col m-auto bg-slate-200 px-[120px]">
      <div className="flex items-center py-[24px] justify-between">
        <div className="w-[384.12px] bg-white h-[219.66px] "></div>
        <div className="w-[384.12px] bg-white h-[219.66px] "></div>
        <div className="w-[384.12px] bg-white h-[219.66px] "></div>
      </div>
      <div className="flex items-center justify-between">
        <div className=" flex w-[588px] h-[284px] bg-red-100">
          <Bar data={barData} />
        </div>
        <div className="w-[588px] h-[284px] bg-red-100">
          <Doughnut data={doughnutData} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
