import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";

export default function Siderbar() {
  const { sidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        sidebar.isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } lg:hidden fixed top-0 left-0 w-screen h-screen p-12 flex justify-center items-center bg-black bg-opacity-40 font-semibold transition-opacity`}
    >
      <div className="relative w-full h-full p-4 bg-white rounded-md">
        <button
          onClick={() => sidebar.toggleSidebar()}
          className="absolute top-0 right-0 m-4"
        >
          <FaTimes className="text-xl text-red-500" />
        </button>
        Sidebar
      </div>
    </aside>
  );
}
