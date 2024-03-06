import CurrencySelect from "@/components/signup/CurrencySelect";
import BalanceSet from "@/components/signup/BalanceSet";
import Finish from "@/components/signup/Finish";
import SignUp from "@/components/signup/SignUp";
import React, { useState } from "react";
import Loading from "@/components/Loading";

export default function signup() {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return (
        <div className={`${step == 0 ? "block" : "hidden"}`}>
          <SignUp setStep={setStep} />
        </div>
      );
    case 1:
      return (
        <div className={`${step == 1 ? "pt-10 block" : "hidden"}`}>
          <CurrencySelect setStep={setStep} />
        </div>
      );
    case 2:
      return (
        <div className={`${step == 2 ? "pt-10 block" : "hidden"}`}>
          <BalanceSet setStep={setStep} />
        </div>
      );
    default:
      return (
        <div>
          <Finish />
        </div>
      );
  }
}
