export default function AddRecordModalButton({ tab }) {
  return (
    <div
      className={`w-[360px] h-10 px-3  ${
        tab == "expense" ? "bg-blue-600" : "bg-green-600"
      } rounded-[20px] justify-center items-center gap-1 inline-flex self-stretch`}
    >
      <div className="text-gray-50 text-base font-normal font-sans leading-normal">
        Add Record
      </div>
    </div>
  );
}
