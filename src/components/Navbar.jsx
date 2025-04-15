import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-[#BD701A] font-medium">
      <div className="flex items-center justify-between flex-wrap p-6">
        {/* Logo */}
        <div className="text-xl font-bold">CrownMekk</div>

        {/* Hamburger Button */}
        <div className="block md:hidden">
  <button
    onClick={toggleMenu}
    className="flex items-center px-3 py-2 border rounded text-[#BD701A] border-[#BD701A] hover:text-[#2b2217] hover:border-[#2b2217]"
  >
    {isMenuOpen ? (
      // Close Icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>Close</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      // Hamburger Icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>Menu</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
</div>

        {/* Menu Links */}
        <div
          className={`w-full md:w-1/2 mt-4 md:mt-0 md:flex md:items-center md:justify-around gap-5 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="block mt-2 md:mt-0 hover:text-[#2b2217]">
            Home
          </Link>
          <Link to="/about" className="block mt-2 md:mt-0 hover:text-[#2b2217]">
            About
          </Link>
          <Link to="/shop" className="block mt-2 md:mt-0 hover:text-[#2b2217]">
            Shop
          </Link>
          <Link to="/blog" className="block mt-2 md:mt-0 hover:text-[#2b2217]">
            Blog
          </Link>
          <Link to="/contact" className="block mt-2 md:mt-0 hover:text-[#2b2217]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
