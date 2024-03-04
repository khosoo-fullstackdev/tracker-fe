import CurrencySelect from "@/components/signup/CurrencySelect";
import BalanceSet from "@/components/signup/BalanceSet";
import Finish from "@/components/signup/Finish";
import SignUp from "@/components/signup/SignUp";
import React, { useState } from "react";
import Loading from "@/components/Loading";

export default function signup() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(1);
  return (
    <div>
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "signup" ? "block" : "hidden"
        }`}
      >
        <SignUp showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "Loading" ? "block" : "hidden"}`}>
        <Loading showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div
        className={`${
          showLoader == "currencyselect" ? "pt-10 block" : "hidden"
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
        className={`${showLoader == "balanceset" ? "pt-10 block" : "hidden"}`}
      >
        <BalanceSet
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "goto" ? "pt-10 block" : "hidden"}`}>
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
