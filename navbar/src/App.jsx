import logo from "./logo.svg";
import { links, social } from "./data";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 font-semibold">
      <Header />
    </div>
  );
}

function Header() {
  const [showNav, setShowNav] = useState(false),
    linksListRef = useRef(null),
    [navHeight, setNavHeight] = useState("");

  useEffect(() => {
    let linksListHeight = linksListRef.current.clientHeight;

    if (!showNav) {
      setNavHeight("0px");
      return;
    }

    setNavHeight(linksListHeight + "px");
  }, [showNav]);

  return (
    <header className="w-full py-4 bg-white shadow-lg">
      <div className="container mx-auto px-2 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo-ex" />

          <button
            type="button"
            onClick={() => setShowNav((prevShowNav) => !prevShowNav)}
            className="lg:hidden hover:rotate-90 transition-transform"
          >
            <FaBars className="text-[1.8rem]" />
          </button>
        </div>

        <nav
          className={`${
            showNav ? "mt-4" : "m-0"
          } overflow-hidden transition-all duration-500`}
          style={{ height: navHeight }}
        >
          <ul className="links text-lg lg:flex" ref={linksListRef}>
            {links.map((link) => (
              <li
                key={link.id}
                className="group my-1 p-2 transition-colors hover:bg-slate-200 hover:cursor-pointer rounded-sm"
              >
                <a
                  href={link.url}
                  className="capitalize group-hover:pl-2 lg:group-hover:pl-0 transition-all"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden lg:flex">
          {social.map((el) => (
            <li key={el.id} className="mx-2 text-2xl">
              <a href={el.url}>
                {(el.icon == "insta" && (
                  <FaInstagram className="text-rose-700" />
                )) ||
                  (el.icon == "linkedin" && (
                    <FaLinkedin className="text-blue-700" />
                  )) ||
                  (el.icon == "github" && (
                    <FaGithub className="text-black" />
                  )) ||
                  (el.icon == "twitter" && (
                    <FaTwitter className="text-sky-500" />
                  ))}
              </a>
            </li>
          ))}
        </ul>

        <style>{`
        @media (min-width:1024px) {
          nav {
            height: auto !important;
          }
        }     
      `}</style>
      </div>
    </header>
  );
}

export default App;
