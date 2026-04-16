import React from "react";
import { UploadCloud, Sparkles, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud size={28} />,
    title: "Upload Your Data",
    description:
      "Import data from Excel, CSV, APIs, or connect directly to your database.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Clean & Process",
    description:
      "Automatically detect errors, remove duplicates, and prepare your data for analysis.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Visualize & Analyze",
    description:
      "Generate charts, dashboards, and insights to make better decisions instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section bg-[rgb(var(--color-bg-secondary))]">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2>
            How it{" "}
            <span className="text-gradient">works</span>
          </h2>
          <p className="mt-4">
            A simple 3-step process to transform your data into actionable insights.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              className="card text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="mb-4 text-sm font-semibold text-[rgb(var(--color-primary))]">
                Step {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))]">
                  {step.icon}
                </div>
              </div>

              <h3 className="mb-2">{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;