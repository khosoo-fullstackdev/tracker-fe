import CurrencySelect from "@/components/signup/CurrencySelect";
import BalanceSet from "@/components/signup/BalanceSet";
import Finish from "@/components/signup/Finish";
import SignUp from "@/components/signup/SignUp";
import React, { useState } from "react";
import Loading from "@/components/Loading";

export default function signUp() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(0);
  return (
    <div className="w-screen h-screen">
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "SignUp" ? "block" : "hidden"
        }`}
      >
        <SignUp showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div
        className={`w-screen h-screen ${
          showLoader == "Loading" ? "block" : "hidden"
        }`}
      >
        <Loading showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div
        className={`${
          showLoader == "w-screen h-screen" ? "pt-10 block" : "hidden"
        }`}
      >
        <CurrencySelect
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div
        className={`w-screen h-screen${
          showLoader == "BalanceSet" ? "pt-10 block" : "hidden"
        }`}
      >
        <BalanceSet
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div
        className={` w-screen h-screen${
          showLoader == "Finish" ? "pt-10 block" : "hidden"
        }`}
      >
        <Finish
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
    </div>
  );
}
