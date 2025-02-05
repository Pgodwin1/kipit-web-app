import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="mil-top-panel mil-dark-2"
      style={{ backgroundColor: "#101c4e", maxHeight: "80px" }}
    >
      <div className="container flex items-center justify-between py-4 px-6">
        <a href="/" className="mil-logo">
          <img
            src={"../img/logo-color-soft.png"}
            alt="Plax"
            width="83"
            height="32"
          />
        </a>

        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-[#101c4e] z-40 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:static md:transform-none md:h-auto md:w-auto md:bg-transparent`}
        >
          <button
            className="absolute top-6 right-6 text-3xl text-white md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-white md:flex-row md:space-y-0 md:space-x-6 md:h-auto">
            <li className="mil-active">
              <a href="/." className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contactus" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/login" className="text-white hidden md:block">
            Log in
          </a>
          <button
            className="text-gray-800 text-2xl block md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fas fa-bars text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
