import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Upload Data", path: "/dashboard/upload" },
  { name: "Clean Data", path: "/dashboard/clean" },
  { name: "Charts", path: "/dashboard/charts" },
];

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition block ${
      isActive
        ? "bg-[rgb(var(--color-primary))] text-white"
        : "hover:bg-black/5 dark:hover:bg-white/10"
    }`;

  return (
    <aside className="w-64 border-r border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-secondary))] p-6 hidden md:flex flex-col">

      <h2 className="text-xl font-bold text-gradient mb-10">
        DataFlow
      </h2>

      <nav className="space-y-2 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={linkClass}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;