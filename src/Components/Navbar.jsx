import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-amber-500 border-b-2 border-amber-500"
      : "text-slate-700 hover:text-amber-500";

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold tracking-wide text-slate-900"
        >
          Unique <span className="text-amber-500">Shobayo</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6">
          <div className="flex flex-col gap-4 font-medium">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className={linkClass}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/portfolio"
              className={linkClass}
            >
              Portfolio
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/services"
              className={linkClass}
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/contact"
              className={linkClass}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
