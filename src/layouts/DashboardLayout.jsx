import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Dashboard from "../pages/Dashboard";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Upload Data", path: "/dashboard/upload" },
  { name: "Clean Data", path: "/dashboard/clean" },
  { name: "Charts", path: "/dashboard/charts" },
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition cursor-pointer ${
      isActive
        ? "bg-[rgb(var(--color-primary))] text-white"
        : "hover:bg-black/5 dark:hover:bg-white/10"
    }`;

  return (
    <div className="flex min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar setOpen={setOpen} />

        <Dashboard />
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="w-64 h-full bg-[rgb(var(--color-bg-secondary))] p-6 flex flex-col">
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-gradient">Menu</h2>

              <button
                onClick={() => setOpen(false)}
                className="text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            
            <nav className="space-y-2 text-sm flex-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
