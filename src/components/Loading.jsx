import { LoadingGeldIcon, LoadingGeldTextIcon } from "@/icons/LoadingIcons";

export default function Loading() {
  return (
    <div className="w-screen h-screen justify-center items-center flex bg-white">
      <div className="w-[100%] h-[100%] pt-[404px] pb-[436px] bg-white justify-center items-center inline-flex">
        <div className="w-[172.23px] h-[184px] flex-col justify-center items-center gap-12 inline-flex">
          <div className="w-[172.23px] h-16 p-[10.08px] justify-center items-center gap-[17.64px] inline-flex">
            <LoadingGeldIcon />
            <LoadingGeldTextIcon />
          </div>
          <div className="p-[10.08px] justify-start items-center gap-[17.64px] inline-flex" />
          <div className="flex-col justify-start items-center gap-4 flex">
            <span className="loading loading-spinner loading-lg bg-blue-700"></span>
            <div className="text-slate-900 text-base font-semibold font-sans leading-normal">
              Түр хүлээнэ үү...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
