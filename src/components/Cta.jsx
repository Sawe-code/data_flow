import React from "react";

const CTA = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="rounded-2xl p-8 md:p-12 text-center bg-[rgb(var(--color-primary))] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Start turning your data into insights today
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-white/80">
              Join thousands of users already using DataFlow to analyze,
              visualize, and grow faster.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn bg-white text-black hover:opacity-90">
                Get Started
              </button>

              <button className="btn border border-white text-white hover:bg-white hover:text-black">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
