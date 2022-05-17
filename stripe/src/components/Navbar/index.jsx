import React from "react";
import logo from "../../public/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "../../data";
import MyHoverCard from "../modules/MyHoverCard";

export default function Navbar() {
  const { sidebar } = useGlobalContext();

  return (
    <header className="mb-20 py-4 font-semibold">
      <div className="container mx-auto px-1 flex justify-between items-center">
        <img src={logo} alt="logo stripe" />

        <button
          onClick={() => sidebar.toggleSidebar()}
          className="lg:hidden p-2 bg-gray-900 rounded-md"
        >
          <FaBars className="text-xl text-white" />
        </button>

        <nav className="hidden lg:block">
          <ul className="flex">
            {/* <li className="mx-4 text-lg text-white">
              <button className="capitalize font-semibold">products</button>
            </li>
            <li className="mx-4 text-lg text-white">
              <button className="capitalize font-semibold">developers</button>
            </li>
            <li className="mx-4 text-lg text-white">
              <button className="capitalize font-semibold">company</button>
            </li> */}

            {sublinks.map((sublink, i) => (
              <MyHoverCard key={i} page={sublink.page} links={sublink.links} />
            ))}
          </ul>
        </nav>

        <button className="hidden lg:block px-6 py-2 bg-gray-900 text-white font-semibold rounded-md">
          Sign in
        </button>
      </div>
    </header>
  );
}
