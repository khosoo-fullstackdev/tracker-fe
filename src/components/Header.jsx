import HeaderGeldIcon from "@/icons/HeaderGeldIcon";
import { ExpenseModal } from "./dashboard/ExpenseModal";
import Link from "next/link";
export default function Header() {
  return (
    <div className="navbar m-auto w-[1440px] px-[120px] bg-white">
      <div className="">
        <Link href="/dashboard">
          <HeaderGeldIcon />
        </Link>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li className="text-center text-slate-900 text-base font-normal  leading-normal">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-center text-slate-900 text-base font-semibold  leading-normal">
            <Link href="/record">Record</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <div>
          <button
            className="w-[99px] h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center text-white text-base font-normal leading-normal"
            onClick={() => document.getElementById("ExpenseModal").showModal()}
          >
            + Record
          </button>
          <dialog id="ExpenseModal" className="modal">
            <div className="modal-box w-[870px] max-w-5xl">
              <ExpenseModal />
            </div>
          </dialog>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
