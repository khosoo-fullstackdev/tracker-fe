import { Donut, BarChart } from "../Charts"; 

export default function Body() {
  return (
    <div className="flex flex-col w-[100%] h-[219.66px] m-auto px-[120px]">
      <div className="flex py-[24px] justify-between">
        <img
          className="w-[384.12px] rounded-tl-[18px] rounded-bl-[18px]"
          src="/card.png"
        ></img>
        <div className="w-[384.12px]  rounded-tl-[18px] rounded-bl-[18px]">
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
          <BarChart/>
        </div>
        <div className="flex flex-col w-[588px] h-[284px] bg-red-100 m-auto">
          <p className="text-slate-900 text-base font-semibold leading-normal">
            Income - Expense
          </p>
          <div className="divider"></div>
          <Donut/>
        </div>
      </div>
      <div></div>
    </div>
  );
}
