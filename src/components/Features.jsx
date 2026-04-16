import React from "react";
import { Database, BarChart3, Sparkles, ShieldCheck, UploadCloud, LineChart } from "lucide-react";

const features = [
  {
    icon: <UploadCloud size={28} />,
    title: "Data Import",
    description: "Upload Excel, CSV, or connect directly to databases and APIs.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Auto Cleaning",
    description: "Automatically detect missing values, duplicates, and anomalies.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Visual Analytics",
    description: "Turn raw data into beautiful charts and dashboards instantly.",
  },
  {
    icon: <Database size={28} />,
    title: "Multi-Source Support",
    description: "Combine data from different sources into one unified view.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Real-Time Insights",
    description: "Monitor trends and patterns as your data updates.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Processing",
    description: "Your data is encrypted and handled with enterprise-grade security.",
  },
];

const Features = () => {
  return (
    <section className="section">
      <div className="container-custom">

        
        <div className="text-center max-w-2xl mx-auto">
          <h2>
            Everything you need to{" "}
            <span className="text-gradient">analyze your data</span>
          </h2>
          <p className="mt-4">
            Powerful tools to clean, process, and visualize your data without complexity.
          </p>
        </div>

        
        <div className="mt-12 grid-auto">

          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 text-[rgb(var(--color-primary))]">
                {feature.icon}
              </div>

              <h3 className="mb-2">{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;