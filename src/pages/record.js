import Header from "@/components/Header";

import RecordsBar from "@/components/record/RecordsBar";

export default function Record() {
  return (
    <div className="w-screen flex flex-col m-auto">
      <Header />
      <div className="flex flex-col w-screen pt-7 bg-gray-100 ">
        <div className="w-[1440px] flex m-auto px-[120px]">
          <RecordsBar />
        </div>
      </div>
    </div>
  );
}
