import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center px-4 md:px-8 h-18 shadow-md">
        <div className="flex items-center gap-2">
          <img
            className="h-10 md:h-14"
            src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%200.png"
            alt="logo"
          />
          <h1 className="text-lg md:text-2xl font-semibold">ToDesktop</h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>

        <button className="hidden lg:flex gap-3 items-center rounded-lg border px-4 py-2">
          <img
            className="h-6"
            src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%201.svg"
            alt=""
          />
          Electron Developers
          <ArrowRight size={18} />
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 shadow-md">
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Changelog</a>
          <a href="#">Blogs</a>
          <a href="#">Login</a>

          <button className="flex gap-3 items-center rounded-lg border px-4 py-2 mt-2">
            <img
              className="h-6"
              src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%201.svg"
              alt=""
            />
            Electron Developers
            <ArrowRight size={19} />
          </button>
        </div>
      )}

      <main className=""></main>
    </div>
  );
}

export default Navbar;
