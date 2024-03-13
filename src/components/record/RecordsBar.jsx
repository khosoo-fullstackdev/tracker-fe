import AddRecord from "./AddRecord";
export default function RecordsBar() {
  return (
    <div className="flex flex-col w-72 px-4 py-6 gap-6 bg-gray-50 rounded-xl border border-gray-200 ">
      <p className="text-black text-2xl font-semibold leading-loose">Records</p>
      <AddRecord />
      <div className="flex w-28 h-36 flex-col justify-start items-start gap-4 ">
        <div className="text-gray-800 text-base font-semibold leading-normal">
          Types
        </div>
        <div className="w-28">
          <div className="flex h-8 px-3 rounded-lg justify-start items-center text-gray-800 text-base font-normal gap-4 leading-normal">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
            All
          </div>
          <div className="flex h-8 px-3 rounded-lg justify-start items-center text-gray-800 text-base font-normal gap-4 leading-normal">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
            Income
          </div>
          <div className="flex h-8 px-3 rounded-lg justify-start items-center text-gray-800 text-base font-normal gap-4 leading-normal">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
            Expense
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-gray-800 text-base font-semibold leading-normal">
            Category
          </p>
          <p className="opacity-20 text-gray-800 text-base font-normal leading-normal">
            Clear
          </p>
        </div>
        <div className="Catagories"></div>
        <div className="flex flex-col w-[100%] gap-4 ">
          <p className="text-gray-800 text-base font-semibold leading-normal">
            Amount Range
          </p>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="0"
              className="w-28 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 text-slate-900 text-base font-normal leading-normal"
            />
            <input
              type="text"
              placeholder="10000000"
              className="w-28 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 text-slate-900 text-base font-normal leading-normal"
            />
          </div>

          <div>
            <input
              type="range"
              min={0}
              max={10000000}
              className="range range-primary"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>0</span>
              <span>10,000,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
