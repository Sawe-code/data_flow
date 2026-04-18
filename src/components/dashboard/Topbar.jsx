import React from "react";

const Topbar = ({ setOpen }) => {
  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-secondary))]">
      <div className="flex items-center gap-3">
        <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
          ☰
        </button>

        <h1 className="font-semibold tracking-tight">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn btn-secondary">Upload</button>

        <button className="btn btn-primary">Export</button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-md" />
      </div>
    </header>
  );
};

export default Topbar;
