import ArrowDown from "@/icons/ArrowDown";
import ExpDot from "@/icons/ExpDot";

export default function ExpenseCard() {
  return (
    <div className="w-[384.12px] bg-white rounded-xl flex-col justify-between ">
      <div className="flex items-center h-14 px-6 py-4 border-b gap-2 text-slate-900 text-base font-semibold leading-normal">
        <ExpDot />
        <p className="text-slate-900 text-base font-semibold leading-normal">
          Your Expense
        </p>
      </div>
      <div className="flex px-6 pt-5 pb-6 gap-2 flex-col ">
        <p className=" h-10 ] justify-start items-start text-black text-4xl font-semibold leading-10">
          -1,200,000 ₮
        </p>
        <p className="text-slate-500 text-lg font-normal leading-7">
          Your Expense Amount
        </p>
        <div className="flex pt-2 gap-2">
          <ArrowDown />
          <p className="text-black text-lg font-normal  leading-7">
            32% from last month
          </p>
        </div>
      </div>
    </div>
  );
}
