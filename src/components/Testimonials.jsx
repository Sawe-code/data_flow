import React from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Data Analyst",
    message:
      "DataFlow cleaned my messy Excel files in seconds. What used to take hours now takes minutes.",
  },
  {
    name: "Sarah Kim",
    role: "Startup Founder",
    message:
      "The before-and-after visualization is incredible. It makes data transformation so easy to understand.",
  },
  {
    name: "Michael Brown",
    role: "Student",
    message:
      "I use DataFlow for my projects and it saves me so much time. Super intuitive and powerful.",
  },
];

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>
            What people are saying{" "}
            <span className="text-gradient">about DataFlow</span>
          </h2>
          <p className="mt-4">
            Real feedback from users who transformed their data workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border bg-[rgb(var(--color-bg-secondary))] hover:shadow-lg transition"
            >
              <p className="text-sm leading-relaxed">“{item.message}”</p>

              <div className="mt-6">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-[rgb(var(--color-text-muted))]">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
