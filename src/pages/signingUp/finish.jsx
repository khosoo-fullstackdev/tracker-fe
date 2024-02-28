import { useRouter } from "next/router";

export default function finish() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen m-auto flex flex-col pt-10 bg-white gap-[141px] ">
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-[107.65px] h-10 p-[6.30px] justify-start items-center gap-[11.03px]">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M19.0069 9.36772V0.300781H9.7425V9.36772H0.478027V18.6322H9.7425V27.6991H19.0069V18.6322H28.2714V9.36772H19.0069ZM19.0069 18.4347H9.7425V9.56665H19.0069V18.4347Z"
              fill="#0166FF"
            />
          </svg>
          <svg
            width="57"
            height="20"
            viewBox="0 0 57 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Geld">
              <path
                d="M9.19463 9.57151H18.041V17.0821C16.2516 18.8211 13.5296 19.7284 10.354 19.7284C4.17917 19.7284 0.297852 16.1748 0.297852 10.4536C0.297852 4.73247 4.17917 1.1536 9.97594 1.1536C13.202 1.1536 15.6467 2.13653 17.3605 3.72434L15.1174 6.24467C13.9077 5.18613 12.0678 4.50564 10.0011 4.50564C6.39706 4.50564 4.00274 6.79914 4.00274 10.4536C4.00274 14.2341 6.49788 16.452 10.48 16.452C12.0678 16.452 13.5044 16.1748 14.689 15.2927V12.6967H9.19463V9.57151Z"
                fill="black"
              />
              <path
                d="M34.052 12.4951C34.052 12.7219 34.052 13.2512 34.0268 13.5284H23.3406C23.7187 15.5699 25.13 16.7292 27.3983 16.7292C29.0114 16.7292 30.4479 16.1244 31.3805 14.965L33.5732 16.8301C32.313 18.5691 30.2967 19.6528 27.1463 19.6528C22.5341 19.6528 19.8121 16.8301 19.8121 12.4447C19.8121 8.08451 22.7609 5.23654 26.9699 5.23654C31.7081 5.23654 34.052 8.26093 34.052 12.4951ZM26.9699 8.13492C25.2056 8.13492 23.7943 9.01703 23.3658 11.0081H30.6496C30.4479 9.4959 29.3642 8.13492 26.9699 8.13492Z"
                fill="black"
              />
              <path
                d="M36.3203 19.3756V0.271484H39.7984V19.3756H36.3203Z"
                fill="black"
              />
              <path
                d="M49.011 19.678C44.9785 19.678 42.3573 16.8805 42.3573 12.4699C42.3573 8.05931 45.0037 5.28694 48.8598 5.28694C50.2712 5.28694 51.9598 5.6902 53.0939 6.79914V0.271484H56.5216V19.3756H53.1443V18.0398C52.0606 19.3504 50.3468 19.678 49.011 19.678ZM49.7671 16.5528C51.0777 16.5528 52.4387 16.0236 53.1443 14.7382V10.1764C52.4387 9.04224 51.0273 8.41215 49.6915 8.41215C47.4988 8.41215 45.9362 9.87395 45.9362 12.4699C45.9362 15.0154 47.4484 16.5528 49.7671 16.5528Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
        <ul data-theme="light" className="steps">
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