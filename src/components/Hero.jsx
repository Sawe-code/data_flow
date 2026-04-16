import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-20 hero-gradient"></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn messy data into{" "}
            <span className="text-gradient">clear insights</span>
          </h1>

          <p className="mt-6 max-w-lg text-base md:text-lg">
            Connect any data source, clean it automatically, and visualize
            everything in beautiful dashboards built for modern teams.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary px-6 py-3 rounded-md">
              Start for Free
            </button>

            <button className="btn btn-secondary px-6 py-3 rounded-md">
              View Demo
            </button>
          </div>

          <div className="mt-8 text-sm text-muted">
            No credit card required • Works with Excel, APIs, Databases
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="card w-full max-w-md shadow-xl">
            <h3 className="mb-4">Analytics Preview</h3>

            <div className="space-y-4">
              <div className="h-24 rounded-md bg-[rgb(var(--color-bg-secondary))] flex items-center justify-center text-sm">
                Chart Preview
              </div>

              <div className="flex gap-3">
                <div className="flex-1 h-16 rounded-md bg-[rgb(var(--color-bg-secondary))]"></div>
                <div className="flex-1 h-16 rounded-md bg-[rgb(var(--color-bg-secondary))]"></div>
              </div>

              <button className="btn btn-primary w-full">Run Analysis</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
