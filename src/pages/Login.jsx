"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(formData);
      
    } catch (err) {
      console.log(err);
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-10 bg-[rgb(var(--color-bg))]">
      <section className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-[rgb(var(--color-border))] bg-white dark:bg-[rgb(var(--color-bg-secondary))] shadow-lg">
        <div className="grid md:grid-cols-2">
          
          <div className="bg-[rgb(var(--color-primary))] text-white flex flex-col items-center justify-center px-8 py-16 text-center md:rounded-r-[120px]">
            <h2 className="text-3xl font-bold">Welcome Back</h2>

            <p className="mt-3 max-w-sm text-sm text-white/80 leading-relaxed">
              Access your dashboards, clean your data, and generate insights
              instantly.
            </p>

            <p className="mt-8 text-sm text-white/80">Don’t have an account?</p>

            <Link
              to="/signup"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              Sign Up
            </Link>
          </div>

          
          <div className="px-8 py-12 sm:px-12 md:px-14">
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl font-bold text-center">Login</h1>

              <p className="text-sm text-[rgb(var(--color-text-muted))] text-center mt-3">
                Sign in to your DataFlow account
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                
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
                    placeholder="Enter your password"
                    className="input"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[rgb(var(--color-primary))] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="w-full btn btn-primary py-3 rounded-full"
                  >
                    {loading ? "Logging in..." : "Login"}
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

export default Login;
