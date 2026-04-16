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
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#020617]/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-gradient">DataFlow</h1>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm transition ${
                  isActive
                    ? "text-[var(--color-primary)] font-medium"
                    : "text-muted hover:text-black dark:hover:text-white"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-[var(--color-primary)]
                after:transition-all after:duration-300
                hover:after:w-full`
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
              className="text-base text-muted dark:text-gray-300"
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
