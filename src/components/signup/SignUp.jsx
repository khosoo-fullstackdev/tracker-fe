import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import SignUpLogin from "@/icons/SignUpLogin";
import { useState } from "react";

export default function SignUp({ setStep }) {
  const router = useRouter();
  const BE_URL = "http://localhost:4000/signup";

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSignUp = async () => {
    const data = {
      name: userName,
      email: userEmail,
      password: userPassword,
      id: uuidv4(),
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
  };

  return (
    <div className={`w-screen h-screen m-auto flex bg-white`}>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <SignUpLogin />
        <p className="text-slate-900 text-2xl font-semibold leading-loose ">
          Create Geld account
        </p>
        <p className="text-slate-700 text-base font-normal leading-normal pb-10">
          Sign up below to create your Wallet account
        </p>
        <div className="flex flex-col gap-4 pb-10">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <input
            type="password"
            placeholder="Retype Password"
            className="flex w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center text-neutral-400 text-base font-normal leading-normal"
          />
          <input
            type="submit"
            name="submit"
            placeholder="Sign up"
            onClick={() => {
              handleSignUp(), setStep(1);
            }}
            className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex text-white text-xl font-normal  leading-7"
          />
        </div>

        <div className="flex w-[228px] h-8 justify-start gap-6 items-baseline ">
          <p className="text-slate-900 text-base font-normal  leading-normal">
            Already have account?
          </p>
          <button
            onClick={() => router.push("/")}
            className="text-blue-600 text-base font-normal leading-normal"
          >
            Log in
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
}
