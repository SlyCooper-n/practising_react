import React from "react";
import logo from "../../public/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";

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

        <button className="hidden lg:block px-6 py-2 bg-gray-900 text-white font-semibold rounded-md">
          Sign in
        </button>
      </div>
    </header>
  );
}
