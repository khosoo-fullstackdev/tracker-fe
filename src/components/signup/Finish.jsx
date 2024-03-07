import { useRouter } from "next/router";
import SignUpGeld from "@/icons/SignUpGeld";

export default function Finish() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen m-auto flex flex-col pt-10 bg-white gap-[141px] ">
      <div className="flex flex-col items-center gap-12">
        <SignUpGeld />
        <ul className="steps">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="pb-4">
          <div className="w-12 h-12 p-2 bg-blue-600 rounded-[100px] items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Check">
                <path
                  id="Vector"
                  d="M28.7076 9.70757L12.7076 25.7076C12.6147 25.8005 12.5044 25.8743 12.383 25.9246C12.2616 25.975 12.1315 26.0009 12.0001 26.0009C11.8687 26.0009 11.7385 25.975 11.6171 25.9246C11.4957 25.8743 11.3854 25.8005 11.2926 25.7076L4.29257 18.7076C4.10493 18.5199 3.99951 18.2654 3.99951 18.0001C3.99951 17.7347 4.10493 17.4802 4.29257 17.2926C4.48021 17.1049 4.7347 16.9995 5.00007 16.9995C5.26543 16.9995 5.51993 17.1049 5.70757 17.2926L12.0001 23.5863L27.2926 8.29257C27.4802 8.10493 27.7347 7.99951 28.0001 7.99951C28.2654 7.99951 28.5199 8.10493 28.7076 8.29257C28.8952 8.48021 29.0006 8.7347 29.0006 9.00007C29.0006 9.26543 28.8952 9.51993 28.7076 9.70757Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>

        <p className="text-slate-900 text-2xl font-semibold leading-loose pb-6">
          Good Job!
        </p>

        <p className="w-96 text-slate-600 pt-[12px] text-xs font-normal leading-none pb-8">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center text-white text-xl font-normal leading-7"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
