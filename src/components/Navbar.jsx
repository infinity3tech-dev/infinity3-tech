import React, { useState, useRef, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import logo from "/logo.webp";
import logoDark from "/logo_dark.webp";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dropdownRef = useRef();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsOpen(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => {
      setOpenDropdown(null);
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleMenuClick = (menu) => {
  //   if (menu === "home") {
  //     if (isLocked) {
  //       setOpenDropdown(null);
  //       setIsLocked(false);
  //     } else {
  //       setOpenDropdown("home");
  //       setIsLocked(true);
  //     }
  //   } else {
  //     setOpenDropdown(null);
  //     setIsLocked(false);
  //   }
  // };

  return (
    <nav
      className={`w-full fixed top-0 left-0 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-b-2 border-orange-500 z-50 shadow-sm transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="hover:text-orange-500 flex items-center">
          <div className="h-16 w-[120px] flex items-center justify-center">
            {/* DARK LOGO */}
            <img
              src="/logo_dark.webp"
              alt="Infinity3 Technology Logo"
              width="120"
              height="64"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-28 h-auto hidden dark:block object-contain"
            />

            {/* LIGHT LOGO */}
            <img
              src="/logo.webp"
              alt="Infinity3 Technology Logo"
              width="120"
              height="64"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-28 h-auto block dark:hidden object-contain"
            />
          </div>
        </Link>

        {/* Menu */}
        <ul
          className={`ml-6 hidden md:flex items-center gap-8 dark:text-white text-black font-medium`}
        >
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("internship")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/internship">Internship</Link>
            </div>
          </li>
          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/services">Services </Link>
            </div>
          </li>
          {/* Technology */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("technology")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/technology"> Technology</Link>
            </div>
          </li>
          {/*  Portfolio */}
          <li
            className="relative  whitespace-nowrap"
            onMouseEnter={() => setOpenDropdown("case")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/case-studies"> Portfolio</Link>
              {/* <FaChevronDown size={12} /> */}
            </div>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("career")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/career-path">Career Path</Link>
            </div>
          </li>

          {/* about */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubMenu(null);
            }}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              About <FaChevronDown size={12} />
            </div>
            {openDropdown === "about" && (
              <div
                className="
    absolute
    top-full
    left-0
    pt-3
    z-50
    "
              >
                <div
                  className="
      w-max
      min-w-[180px]
      overflow-hidden
      rounded-2xl
      border
      border-gray-200
      dark:border-gray-700
      bg-white
      dark:bg-gray-800
      shadow-2xl
      "
                >
                  <span className="block h-1 bg-orange-500"></span>

                  <ul className="py-2 text-sm">
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:text-orange-500"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        className="block px-4 py-2 hover:text-orange-500"
                      >
                        Team
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/gallery"
                        className="block px-4 py-2 hover:text-orange-500"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="block px-4 py-2 hover:text-orange-500"
                      >
                        FAQ
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 hover:text-orange-500"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right Section */}
        <div className="ml-4 hidden md:flex items-center gap-4">
          <div
            className={`flex items-center rounded-md px-3 border-0 py-2 transition-all duration-300`}
          >
            <div ref={searchRef} className="flex items-center gap-3 relative">
              <FaSearch
                className="text-black dark:text-white text-lg cursor-pointer"
                onClick={() => setShowSearch(!showSearch)}
              />

              {showSearch && (
                <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md transition-all">
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                    className="outline-none bg-transparent text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300"
                    placeholder="Search..."
                    onClick={handleSearch}
                  />
                </div>
              )}
            </div>
          </div>

          <button onClick={toggleTheme} className="px-4 py-2">
            {theme === "light" ? <FaMoon /> : <MdSunny />}
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl dark:text-white text-black"
          >
            ☰
          </button>
        </div>
      </div>
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`fixed top-0 left-0 w-[280px] h-full z-50 md:hidden p-4 overflow-y-auto dark:bg-gray-900/80 bg-white/10 backdrop-blur-xl border-r border-white/20 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-3">
            <div className="h-10 w-[110px] flex items-center">
              <img
                src={logoDark}
                alt="logo"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full hidden dark:block object-contain"
              />

              <img
                src={logo}
                alt="logo"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full block dark:hidden object-contain"
              />
            </div>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
            >
              {theme === "light" ? <FaMoon /> : <MdSunny />}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="text-xl dark:text-white text-black hover:text-orange-400"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-2 dark:text-white text-black font-medium">
            <Link
              to="/internship"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Internship
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Services
            </Link>

            <Link
              to="/technology"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Technology
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Portfolio
            </Link>
            <Link
              to="/career-path"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Career Path
            </Link>

            {/* About Dropdown */}
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center px-3 py-2 hover:bg-white/10 transition"
              >
                About
                <FaChevronDown
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Team
                  </Link>

                  <Link
                    to="/gallery"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/faq"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    FAQ
                  </Link>

                  <Link
                    to="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
