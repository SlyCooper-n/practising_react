import logo from "../logo.svg";
import {
  FaTimes,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
import { links } from "../data";
import { useGlobalContext } from "../AppProvider";

export default function Sidebar() {
  const { sidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        sidebar.isSidebarOpen ? "left-0" : "-left-[100vw]"
      } absolute top-0 w-screen lg:w-1/3 lg:max-w-[500px] h-screen px-6 py-4 bg-slate-100 transition-all duration-200`}
    >
      <div className="mb-6 flex justify-between">
        <img src={logo} alt="logo" className="mr-4" />

        <button onClick={() => sidebar.toggleSidebar()}>
          <FaTimes className="text-red-500 text-2xl" />
        </button>
      </div>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              className="group my-4 flex items-center text-slate-500 text-lg font-semibold hover:text-slate-900 transition-colors"
            >
              {link.icon == "home" && <FaHome />}
              {link.icon == "userFriends" && <FaUserFriends />}
              {link.icon == "folderOpen" && <FaFolderOpen />}
              {link.icon == "calendarAlt" && <FaCalendarAlt />}
              {link.icon == "wpForms" && <FaWpforms />}
              <p className="ml-4 capitalize group-hover:translate-x-4 transition-transform">
                {link.text}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
