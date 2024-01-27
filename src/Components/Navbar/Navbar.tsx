import { NavLink } from "react-router-dom";
export default function Navbar() {


  return (
    <nav className="bg-gradient-to-r from-zinc-800 to-zinc-950 fixed w-full z-20 top-0 start-0 border-b border-gray-600  text-center ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
        <div
          className="items-center justify-between mx-auto  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  border-gray-700">
            <li>
              <NavLink
                className={`nav-link text-xl md:px-10 text-white  block   rounded md:bg-transparent  `}
                to={""}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link block  text-xl md:px-10  text-white  rounded md:bg-transparent   "
                to={"login"}
                aria-current="page"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

