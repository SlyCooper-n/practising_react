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

export default function Sidebar() {
  return (
    <aside className="hidden">
      <div>
        <img src={logo} alt="logo" />

        <button>
          <FaTimes />
        </button>
      </div>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon == "home" && <FaHome />}
              {link.icon == "userfriends" && <FaUserFriends />}
              {link.icon == "folderOpen" && <FaFolderOpen />}
              {link.icon == "calendarAlt" && <FaCalendarAlt />}
              {link.icon == "wpForms" && <FaWpforms />}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
