import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Pricing", path: "/pricing" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#020617]/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom flex items-center justify-between h-16">
        <div className="flex items-center gap-2 group">
          <img
            src="/icons/dataflow.png"
            alt="DataFlow"
            className="h-10 w-10 transition group-hover:scale-110 rounded-md"
          />

          <span className="text-xl font-bold text-gradient">DataFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-[rgb(var(--color-primary))]" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hidden md:block btn btn-primary px-5 py-2 rounded-full">
            Get Started
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white/90 dark:bg-[#020617]/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="btn btn-primary mt-4 w-full rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
