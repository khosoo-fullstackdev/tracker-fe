import { useRouter } from "next/router";

export default function Home() {
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
        <ul className="steps">
          <li className="step step-primary">Currency</li>
          <li className="step">Balance</li>
          <li className="step">Finish</li>
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
              <g id="Money">
                <path
                  id="Vector"
                  d="M21 16C21 16.9889 20.7068 17.9556 20.1573 18.7779C19.6079 19.6001 18.827 20.241 17.9134 20.6194C16.9998 20.9978 15.9945 21.0969 15.0245 20.9039C14.0546 20.711 13.1637 20.2348 12.4645 19.5355C11.7652 18.8363 11.289 17.9454 11.0961 16.9755C10.9031 16.0055 11.0022 15.0002 11.3806 14.0866C11.759 13.173 12.3999 12.3921 13.2221 11.8427C14.0444 11.2932 15.0111 11 16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16ZM31 8V24C31 24.2652 30.8946 24.5196 30.7071 24.7071C30.5196 24.8946 30.2652 25 30 25H2C1.73478 25 1.48043 24.8946 1.29289 24.7071C1.10536 24.5196 1 24.2652 1 24V8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H30C30.2652 7 30.5196 7.10536 30.7071 7.29289C30.8946 7.48043 31 7.73478 31 8ZM29 13.7937C27.8645 13.458 26.8311 12.8435 25.9938 12.0062C25.1565 11.1689 24.542 10.1355 24.2062 9H7.79375C7.45801 10.1355 6.84351 11.1689 6.00623 12.0062C5.16895 12.8435 4.1355 13.458 3 13.7937V18.2062C4.1355 18.542 5.16895 19.1565 6.00623 19.9938C6.84351 20.8311 7.45801 21.8645 7.79375 23H24.2062C24.542 21.8645 25.1565 20.8311 25.9938 19.9938C26.8311 19.1565 27.8645 18.542 29 18.2062V13.7937Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <p className="text-slate-900 text-2xl font-semibold leading-loose pb-6">
          Select base currency
        </p>
        <select className="w-96 h-16 p-4 bg-gray-100 text-gray-800 rounded-lg border border-gray-300">
          <option className="text-gray-800 font-semibold leading-normal">
            MNT - Mongolian Tugrik
          </option>
          <option className="text-gray-800 font-semibold leading-normal">
            EUR - European Euro
          </option>
          <option className="text-gray-800 font-semibold leading-normal">
            USD - American Dollar
          </option>
        </select>
        <p className="w-96 text-slate-600 pt-[12px] text-xs font-normal leading-none pb-8">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <button
          onClick={() => router.push("/signingUp/currency")}
          className="flex w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center text-white text-xl font-normal leading-7"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
