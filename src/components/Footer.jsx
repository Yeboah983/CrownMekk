import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#BD701A] text-white w-full px-10 py-8">
      <div className="flex flex-col md:flex-row justify-around w-full gap-10">
        {/* Left: Logo and Contact Info */}
        <div className="space-y-4 max-w-xs font-medium">
          <h1 className="text-2xl font-bold">CrownMekk</h1>
          <p className="text-white font-medium text-lg">
            (+233) 5057 62889 / 2499 69499
          </p>
          <p className="text-white">
            Ekus Pharmacy, Korle Bu New Station <br />
            Accra, Ghana
          </p>
        </div>

        {/* Center: Useful Links */}

        <div className="">
          <ul className="space-y-4 max-w-xs font-medium">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">News</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 max-w-xs font-medium">
          <ul className="space-y-4 max-w-xs font-medium">
            <li>
              <Link to="#">Delivery and payment</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 max-w-xs font-medium">
          <h2 className="font-semibold">Follow Us.</h2>
          <div className="flex space-x-4">
            <Link
              to="https://www.facebook.com/share/15g39RefY8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://youtube.com/@findmekk888?si=s8SXgTJAezatS4nn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaYoutube />
            </Link>
            <Link
              to="https://www.facebook.com/share/15g39RefY8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.instagram.com/findmekk888?igsh=dDZycjJkZjJjd3Ri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/in/miss-millicent-edem-091970118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.tiktok.com/@findmekk888?_t=ZM-8vPtuhbbss3&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#BD701A]"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full mt-12 border-t border-white pt-4 text-center text-sm text-white">
        CrownMekk© 2025, Made with passion
      </div>
    </footer>
  );
};

export default Footer;
