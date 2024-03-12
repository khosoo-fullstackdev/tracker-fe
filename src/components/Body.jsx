import IncomeCard from "./dashboard/IncomeCard";
import ExpenseCard from "./dashboard/ExpenseCard";
import RecordIcon from "@/icons/RecordIcon";
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
    <div className="flex flex-col w-screen bg-gray-100">
      <div className="w-[1440px] m-auto px-[120px]">
        <div className="flex py-[24px] justify-between">
          <img
            className="w-[384.12px] rounded-tl-[18px] rounded-bl-[18px]"
            src="/card.png"
          ></img>
          <IncomeCard />
          <ExpenseCard />
        </div>
        <div className="flex w-[100%]  justify-between">
          <div className="flex flex-col w-[588px] h-[284px] m-auto bg-white rounded-xl justify-center">
            <p className="text-slate-900 text-base font-semibold leading-normal h-14 px-6 py-4 border-b border-slate-200 gap-2">
              Income - Expense
            </p>
            <BarChart />
          </div>
          <div className="flex flex-col w-[588px] h-[284px] m-auto bg-white rounded-xl justify-center">
            <p className="text-slate-900 text-base font-semibold leading-normal h-14 px-6 py-4 border-b border-slate-200 gap-2">
              Income - Expense
            </p>
            <Donut />
          </div>
        </div>
        <div className="w-[100%] mt-[26px] flex flex-col bg-white rounded-xl ">
          <p className=" h-14 px-6 py-4 border-b border-slate-200 justify-center gap-2 text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
            Last Records
          </p>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
          <div className="w-[100%] h-20 px-6 py-5 bg-white border-b border-gray-200 justify-between items-center flex">
            <div className="flex w-[185px] h-10 justify-start items-center gap-4">
              <RecordIcon />
              <div className="flex flex-col h-10 justify-center items-start ">
                <p className="text-black text-base font-normal leading-normal">
                  Lending & Renting
                </p>
                <p className="text-gray-500 text-xs font-normal leading-none">
                  3 hours ago
                </p>
              </div>
            </div>
            <p className="text-lime-500 text-base font-semibold  leading-normal">
              - 1,000₮
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
