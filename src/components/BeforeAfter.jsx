import { useState } from "react";

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>
            See the difference <span className="text-gradient">instantly</span>
          </h2>
          <p className="mt-4">
            From messy spreadsheets to clean, structured data in seconds.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border h-[300px]">
          <div className="absolute inset-0 p-8 bg-[rgb(var(--color-bg-secondary))]">
            <h3 className="mb-4 text-[rgb(var(--color-primary))] font-semibold">
              After (Clean Data)
            </h3>

            <table className="w-full text-sm text-left border border-[rgb(var(--color-border))]">
              <thead className="bg-[rgb(var(--color-bg))]">
                <tr>
                  <th className="p-2 border-b">Name</th>
                  <th className="p-2 border-b">Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">Justin</td>
                  <td className="p-2 border-b">20</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Kai</td>
                  <td className="p-2 border-b">22</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Faith</td>
                  <td className="p-2 border-b">25</td>
                </tr>
                <tr>
                  <td className="p-2">Brenda</td>
                  <td className="p-2">28</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="absolute inset-0 p-8 bg-[rgb(var(--color-bg))] border-r overflow-hidden transition-all duration-200"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <h3 className="mb-4 text-red-500 font-semibold">
              Before (Messy Data)
            </h3>

            <table className="w-full text-sm text-left border border-red-300">
              <thead>
                <tr>
                  <th className="p-2 border-b">name</th>
                  <th className="p-2 border-b">age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">justin</td>
                  <td className="p-2 border-b">20</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">JUSTIN</td>
                  <td className="p-2 border-b">20</td>
                </tr>
                <tr>
                  <td className="p-2 border-b text-red-400">null</td>
                  <td className="p-2 border-b">22</td>
                </tr>
                <tr>
                  <td className="p-2"> kai</td>
                  <td className="p-2">22</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          />

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] accent-[rgb(var(--color-primary))]"
          />
        </div>

        <div className="flex justify-between max-w-4xl mx-auto mt-4 text-sm text-[rgb(var(--color-text-muted))]">
          <span>Messy Data</span>
          <span>Clean Data</span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
