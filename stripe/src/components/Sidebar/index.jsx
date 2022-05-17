import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../../data";

export default function Siderbar() {
  const { sidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        sidebar.isSidebarOpen
          ? "bg-opacity-40 visible"
          : "bg-opacity-0 invisible"
      } lg:hidden fixed top-0 left-0 w-screen h-screen p-12 flex justify-center items-center bg-black font-semibold transition-all`}
    >
      <div
        className={`${
          sidebar.isSidebarOpen ? "scale-100" : "scale-0"
        } relative w-full h-full p-4 bg-white rounded-md transition-transform`}
      >
        <button
          onClick={() => sidebar.toggleSidebar()}
          className="absolute top-0 right-0 m-4"
        >
          <FaTimes className="text-xl text-red-500" />
        </button>

        {sublinks.map((sublink, i) => (
          <section key={i} className="mb-4">
            <h4 className="mb-2 capitalize">{sublink.page}</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sublink.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center capitalize"
                >
                  {link.icon == "creditCard" && <FaCreditCard />}
                  {link.icon == "book" && <FaBook />}
                  {link.icon == "briefCase" && <FaBriefcase />}
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
