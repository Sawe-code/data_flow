import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return setError("Name is required");
    }
    if (!formData.email.trim()) {
      return setError("Email is required");
    }
    if (!formData.password) {
      return setError("Password is required");
    }
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    setTimeout(() => {
      console.log(formData);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-10 bg-[rgb(var(--color-bg))]">
      <section className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-[rgb(var(--color-border))] bg-white dark:bg-[rgb(var(--color-bg-secondary))] shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="bg-[rgb(var(--color-primary))] text-white flex flex-col items-center justify-center px-8 py-16 text-center md:rounded-r-[120px]">
            <h2 className="text-3xl font-bold">Create Account</h2>

            <p className="mt-3 max-w-sm text-sm text-white/80 leading-relaxed">
              Join DataFlow and start transforming messy data into powerful
              insights.
            </p>

            <p className="mt-8 text-sm text-white/80">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              Login
            </Link>
          </div>

          <div className="px-8 py-12 sm:px-12 md:px-14">
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>

              <p className="text-sm text-[rgb(var(--color-text-muted))] text-center mt-3">
                Create your DataFlow account
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="input"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="w-full btn btn-primary py-3 rounded-full"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
