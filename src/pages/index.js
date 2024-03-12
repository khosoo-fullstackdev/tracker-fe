import SignUpLogin from "@/icons/SignUpLogin";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const BE_URL = "http://localhost:4000/signin";
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.success == "true") {
      router.push("/dashboard");
    } else {
      alert("wrong password or email");
    }
  };
  return (
    <div className="w-screen h-screen m-auto flex bg-white">
      <div className="flex flex-col w-1/2 justify-center items-center">
        <SignUpLogin />
        <p className="text-slate-900 text-2xl font-semibold leading-loose ">
          Welcome Back
        </p>
        <p className="text-slate-700 text-base font-normal leading-normal pb-10">
          Welcome back, Please enter your details
        </p>
        <div className="flex flex-col gap-4 pb-10">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <button
            onClick={() => {
              handleLogin();
            }}
            className="flex w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 text-white text-xl font-normal leading-7"
          >
            Log in
          </button>
        </div>
        <div className="flex w-[220px] h-8 justify-start gap-6 items-baseline ">
          <p className="text-slate-900 text-base font-normal  leading-normal">
            Don’t have account?
          </p>
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-600 text-base font-normal leading-normal"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
}
