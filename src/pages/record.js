import Header from "@/components/Header";

import RecordsBar from "@/components/record/RecordsBar";
import { useState } from "react";

export default function Record() {
  const BE_URL = "http://localhost:4000/getCategory";
  const [category, setCategory] = useState();
  const handleCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    // setCategory(FETCHED_JSON.name);
  };
  // handleCategory();
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
