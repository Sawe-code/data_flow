import React from "react";

const Dashboard = () => {
  return (
    <main className="p-8 space-y-8">

      <div>
        <h2 className="text-2xl font-bold">
          Welcome back 👋
        </h2>
        <p className="text-sm text-[rgb(var(--color-text-muted))]">
          Here’s what’s happening with your data today.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="card p-6">
          <p className="text-sm text-[rgb(var(--color-text-muted))]">Total Rows</p>
          <h3 className="text-2xl font-bold mt-2">0</h3>
        </div>

        <div className="card p-6">
          <p className="text-sm text-[rgb(var(--color-text-muted))]">Cleaned</p>
          <h3 className="text-2xl font-bold mt-2">0%</h3>
        </div>

        <div className="card p-6">
          <p className="text-sm text-[rgb(var(--color-text-muted))]">Errors</p>
          <h3 className="text-2xl font-bold mt-2">0</h3>
        </div>

      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-4">Upload Data</h3>
        <input type="file" className="input" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="card p-6">
          <h3 className="font-semibold mb-4">Data Preview</h3>
          <p className="text-sm text-[rgb(var(--color-text-muted))]">
            No data uploaded yet
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold mb-4">Analytics</h3>

          <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center text-sm text-[rgb(var(--color-text-muted))]">
            Chart Area
          </div>

        </div>

      </div>

    </main>
  );
};

export default Dashboard;