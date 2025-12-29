import React, { useState } from "react";
import Logo from "../../assets/saude_logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-100/55">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-2xl hover:text-green-300">
          <img src={Logo} alt="Logo" className="w-10" />
          SaúdeDigital
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-10 text-lg">
          <a href="#" className="hover:text-blue-600 transition">Beginning</a>
          <a href="#" className="hover:text-blue-600 transition">Community</a>
          <a href="#" className="hover:text-blue-600 transition">Portfolio</a>
        </div>

        {/* Botão Desktop */}
        <button className="hidden md:block bg-linear-to-r from-blue-500 to-blue-400 text-white py-2 px-5 rounded-full hover:opacity-90 transition">
          Join us
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          w-9 h-9
          flex flex-col items-center justify-center
          gap-1.5
          rounded-lg
          border border-gray-300/60
          bg-white/70
          backdrop-blur-sm
          shadow-sm
          transition
          hover:bg-white
          active:scale-95
          "
        >
          <span
            className={`block h-0.5 w-5 bg-gray-800 transition-all duration-500 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-800 transition-all duration-500 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-800 transition-all duration-500 ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-blue-100/90 px-6 py-4 flex flex-col gap-4">
          <a href="#" className="hover:text-blue-600">Beginning</a>
          <a href="#" className="hover:text-blue-600">Community</a>
          <a href="#" className="hover:text-blue-600">Portfolio</a>
          <button className="mt-2 bg-linear-to-r from-blue-500 to-blue-400 text-white py-2 rounded-full">
            Junte-se a nós
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
