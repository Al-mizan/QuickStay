import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotel", path: "/hotel" },
    { name: "Exclusive Offers", path: "/exclusive-offers" },
    { name: "About", path: "/about" },
  ];

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // sets a custom attribute called data-theme on the root <html> element
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    if(location.pathname !== "/") {
      setScrolled(true);
      return;
    }
    else {
      setScrolled(false);
    }
    setScrolled(prev => location.pathname !== "/" ? true : prev);

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div
      className={`navbar fixed top-0 opacity-95 backdrop-blur-md mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 ${
        scrolled ? "bg-base-100 shadow-sm" : "bg-transparent dark:text-white"
      } transition-colors duration-300`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-md text-[16px] dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith("/") ? (
                  <Link to={link.path}>{link.name}</Link>
                ) : (
                  <a href={link.path}>{link.name}</a>
                )}
              </li>
            ))}
            <button
              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all`}
              onClick={() => navigate("/owner")}
            >
              Dashboard
            </button>
          </ul>
        </div>
        <Link to="/" id="home" className="btn btn-ghost hover:bg-transparent hover:text-inherit hover:border-transparent hover:shadow-none text-xl">
          <img
            src={
              scrolled
                ? theme === "dark"
                  ? assets.logo
                  : assets.logo_dark
                : assets.logo
            }
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu text-[16px] menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith("/") ? (
                <Link to={link.path}>{link.name}</Link>
              ) : (
                <a href={link.path}>{link.name}</a>
              )}
            </li>
          ))}
          <button
            className={`border ml-6 px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              scrolled ? "text-black" : "text-white"
            } transition-all`}
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            value="synthwave"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <a onClick={openSignIn} className="btn btn-primary rounded-full px-6">
            Login
          </a>
        )}
      </div>
    </div>
  );
}
