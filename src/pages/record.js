import Header from "@/components/Header";
import AddRecord from "@/components/record/AddRecord";

export default function Record() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="container ">
        <div className="w-[282px] h-[1080px] px-4 py-6 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[250px] h-[88px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-black text-2xl font-semibold font-sans leading-loose">
              Records
            </div>
            <AddRecord />
          </div>
          <div className="w-[250px] h-8 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex mt-4">
            <input
              type="text"
              className="grow shrink basis-0 text-neutral-400 text-base font-normal font-sans leading-normal outline-none bg-gray-100 "
              placeholder="Search"
            />
          </div>
          <div className="w-[109px] h-36 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-gray-800 text-base font-semibold font-sans leading-normal">
              Types
            </div>
            <div className="w-[109px] relative"></div>
          </div>
          <div className="w-[250px] h-[520px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[250px] h-8 justify-between items-center inline-flex">
              <div className="text-gray-800 text-base font-semibold font-sans leading-normal">
                Category
              </div>
              <div className="w-[61px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
                <div className="opacity-20 text-gray-800 text-base font-normal font-sans leading-normal">
                  Clear
                </div>
              </div>
            </div>
            <div className="self-stretch h-[472px] flex-col justify-start items-start gap-2 flex"></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="px-4 py-6 flex flex-col gap-6">
          <div className="w-[894px] h-12 rounded-xl justify-between items-center inline-flex"></div>
          <div className="w-[894px] h-[980px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[894px] h-[404px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-black text-base font-semibold font-sans leading-normal">
                Today
              </div>
              <div className="flex flex-col gap-3"></div>
            </div>
            <div className="w-[894px] h-[404px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-black text-base font-semibold font-sans leading-normal">
                Yesterday
              </div>
              <div className="flex flex-col gap-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
