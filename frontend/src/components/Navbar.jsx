import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/4.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-sm fixed top-0 left-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-[13px]">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img
  src={Logo}
  alt="Next Invest Logo"
  className="h-8 w-auto" 
/>

        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6 text-[13px] text-gray-600">
          <button className="hover:text-brandDark">
            Investment Opportunities
          </button>
          <button className="hover:text-brandDark">How it works</button>
          <button className="hover:text-brandDark">About us</button>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3 text-[12px]">
          <Link
            to="/admin/login"
            className="px-4 py-1.5 rounded border border-brandGreen bg-brandGreen font-medium hover:bg-brandGreen hover:text-white transition"
          >
            LOGIN
          </Link>
          <Link
            to="/admin/register"
            className="px-4 py-1.5 rounded border border-brandPink text-brandPink  font-medium hover:bg-white hover:text-brandPink transition"
          >
            REGISTER
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
