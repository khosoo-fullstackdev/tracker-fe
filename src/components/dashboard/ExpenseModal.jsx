import AddRecordModalButton from "../AddRecordModal";
import CloseModalIcon from "@/icons/CloseModalIcon";
import { useState } from "react";

export function ExpenseModal() {
  const [tab, setTab] = useState("expense");

  return (
    <div className="w-[792px] h-content mx-auto">
      <div className="w-[792px] h-[68px] px-6 py-5 bg-white border-b border-slate-200 flex justify-between items-center">
        <div className="text-slate-900 text-xl font-semibold font-sans leading-7">
          Add Record
        </div>
        <div className="modal-action flex justify-center items-center">
          <form method="dialog">
            <button className="w-6 h-6">
              <CloseModalIcon />
            </button>
          </form>
        </div>
      </div>
      <div className="w-[396px] h-[500px] px-6 pt-5 bg-white flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch bg-gray-100 rounded-[100px] justify-start items-start gap-1 inline-flex">
          <div
            className={`grow shrink basis-0 h-10 px-3  ${
              tab == "expense" ? "bg-blue-600" : "bg-gray-100"
            } rounded-[20px] justify-center items-center gap-1 flex`}
            onClick={() => {
              setTab("expense");
            }}
          >
            <div
              className={` text-base font-normal font-sans leading-normal  ${
                tab == "expense" ? "text-gray-50" : "text-gray-800"
              }`}
            >
              Expense
            </div>
          </div>
          <div
            className={`grow shrink basis-0 h-10 px-3 ${
              tab == "income" ? "bg-green-600" : "bg-gray-100"
            } rounded-[20px] justify-center items-center gap-1 flex`}
            onClick={() => {
              setTab("income");
            }}
          >
            <div
              className={` text-base font-normal font-sans leading-normal  ${
                tab == "income" ? "text-gray-50" : "text-gray-800"
              }`}
            >
              Income
            </div>
          </div>
        </div>
        <div className="self-stretch h-[340px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[300px] flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex">
              <div className="text-neutral-900 text-base font-normal font-sans leading-normal">
                Amount
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <input
                  type="text"
                  className="bg-gray-100 outline-none text-gray-400 text-xl font-normal font-sans leading-7"
                  placeholder="₮ 000.00"
                />
              </div>
            </div>
            <div className="self-stretch h-12 rounded-lg flex-col justify-center items-start flex gap-2">
              <div className="h-[18px] justify-start items-center inline-flex">
                <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                  Category
                </div>
              </div>
              <select className="select select-bordered w-[348px] h-12 bg-gray-50">
                <option disabled selected>
                  Choose
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex gap-2">
                <div className="h-[18px] justify-start items-center inline-flex">
                  <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                    Date
                  </div>
                </div>
                <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-sans leading-normal">
                    Oct 30, 2023
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex gap-2">
                <div className="h-[18px] justify-start items-center inline-flex">
                  <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                    Time
                  </div>
                </div>
                <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-sans leading-normal">
                    4:15 PM
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-10 rounded-[20px] justify-center items-center gap-1 inline-flex">
            <AddRecordModalButton tab={tab} setTab={setTab} />
          </div>
        </div>
      </div>
      <div className="w-[396px] h-[500px] px-6 pt-11 pb-3 bg-white flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch h-[376px] flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch h-12 rounded-lg flex-col justify-center items-start flex gap-2">
            <div className="h-[18px] justify-start items-center inline-flex">
              <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                Payee
              </div>
            </div>
            <select className="select select-bordered w-[348px] h-12 bg-gray-50">
              <option disabled selected>
                Choose
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="self-stretch h-[280px] rounded-lg flex-col justify-center items-start flex gap-2">
            <div className="h-[18px] justify-start items-center inline-flex">
              <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                Note
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-sans leading-normal">
                <textarea
                  name=""
                  id=""
                  cols="35"
                  rows="10"
                  className="bg-gray-100 outline-none"
                  placeholder="Write here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
