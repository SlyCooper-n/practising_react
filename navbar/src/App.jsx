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
    navRef = useRef(null);

  useEffect(() => {
    let linksListHeight = linksListRef.current.clientHeight;

    if (!showNav) {
      navRef.current.style.height = "0px";
      return;
    }
    navRef.current.style.height = linksListHeight + "px";
  }, [showNav]);

  return (
    <header className="w-full py-4 bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo-ex" />

          <button
            type="button"
            onClick={() => setShowNav((prevShowNav) => !prevShowNav)}
            className="hover:rotate-90 transition-transform"
          >
            <FaBars className="text-[1.8rem]" />
          </button>
        </div>

        <nav
          className={`${
            showNav ? "mt-4" : "m-0"
          } overflow-hidden transition-all duration-500`}
          ref={navRef}
        >
          <ul className="links text-lg" ref={linksListRef}>
            {links.map((link) => (
              <li
                key={link.id}
                className="group my-1 p-2 transition-colors hover:bg-slate-200 hover:cursor-pointer rounded-sm"
              >
                <a
                  href={link.url}
                  className="capitalize group-hover:pl-2 transition-all"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden">
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
        </nav>

        <style>{`
        .show-nav {
          height: fit-content;
        }
        .hide-nav {
          height: 0;
          margin: 0;
        }        
      `}</style>
      </div>
    </header>
  );
}

export default App;
