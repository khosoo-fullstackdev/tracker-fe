export default function Header() {
  return (
    <div className="navbar m-auto w-[1440px] px-[120px] bg-white">
      <div className="">
        <a href="http://localhost:3000/dashboard" className="btn-ghost text-xl">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
              fill="#0166FF"
            />
          </svg>
        </a>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li>
            <a href="http://localhost:3000/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="http://localhost:3000/record">Record</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <button className="w-[99px] h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center text-white text-base font-normal leading-normal">
          + Record
        </button>
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
