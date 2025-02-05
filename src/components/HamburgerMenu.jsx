import React, { useState } from "react";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#101c4e] text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4">
          <button
            className="text-white text-2xl mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-times text-grey"></i>
          </button>
          <ul className="space-y-4 text-lg text-white">
            <li>
              <a href="#portfolio" className="hover:underline text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:underline text-white">
                Saving Plans
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:underline text-white">
                Savings Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Toggle Button */}
      <button
        className="text-gray-800 text-2xl"
        onClick={() => setIsMenuOpen(true)}
      >
        <i className="fas fa-bars"></i>
      </button>
    </>
  );
}
