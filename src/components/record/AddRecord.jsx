import { ExpenseModal } from "../dashboard/ExpenseModal";
export default function AddRecord() {
  return (
    <div>
      <button
        className="w-[250px] flex h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center text-white text-base font-normal leading-normal"
        onClick={() => document.getElementById("ExpenseModal").showModal()}
      >
        + Add
      </button>
      <dialog id="ExpenseModal" className="modal">
        <div className="modal-box w-[870px] max-w-5xl">
          <ExpenseModal />
        </div>
      </dialog>
    </div>
  );
}
