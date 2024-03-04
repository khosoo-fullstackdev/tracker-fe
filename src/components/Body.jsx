import IncomeCard from "./dashboard/IncomeCard";
import ExpenseCard from "./dashboard/ExpenseCard";
import { BarChart, Donut } from "./Charts";
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
  return (
    <div className="container flex flex-col w-[100%] m-auto px-[120px] bg-gray-100">
      <div className="flex py-[24px] justify-between">
        <img
          className="w-[384.12px] rounded-tl-[18px] rounded-bl-[18px]"
          src="/card.png"
        ></img>
        <IncomeCard />
        <ExpenseCard />
      </div>
      <div className="flex w-[100%] h-[284px] justify-between">
        <div className="flex flex-col w-[588px] h-[100%] m-auto bg-white rounded-xl justify-center">
          <p className="text-slate-900 text-base font-semibold leading-normal h-14 px-6 py-4 border-b border-slate-200 gap-2">
            Income - Expense
          </p>
          <BarChart />
        </div>
        <div className="flex flex-col w-[588px] h-[100%] m-auto bg-white rounded-xl justify-center">
          <p className="text-slate-900 text-base font-semibold leading-normal h-14 px-6 py-4 border-b border-slate-200 gap-2">
            Income - Expense
          </p>
          <Donut />
        </div>
      </div>
      <div></div>
    </div>
  );
}
