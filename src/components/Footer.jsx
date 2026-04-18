import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(var(--color-bg-secondary))] border-t border-[rgb(var(--color-border))] w-full">
      <div className="container-custom py-12 grid gap-10 md:grid-cols-4">
        
        <div>
          <h2 className="text-xl font-bold text-gradient">DataFlow</h2>
          <p className="mt-4 max-w-xs">
            Transform your data into meaningful insights with powerful analytics tools.
          </p>
        </div>

        <div>
          <h3 className="mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Features</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Pricing</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Integrations</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Updates</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">About</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Blog</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Careers</li>
            <li className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Follow us</h3>
          <div className="flex gap-4 text-xl">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-[rgb(var(--color-border))]">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} DataFlow. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-[rgb(var(--color-primary))] cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;