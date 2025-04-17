import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#946230] text-white w-full px-6 md:px-10 py-8">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 w-full ">
        {/* Contact Info */}
        <div className="space-y-4 max-w-xs font-medium">
          <h1 className="text-2xl font-bold">CrownMekk</h1>
          <p className="text-lg">(+233) 5057 62889 / 2499 69499</p>
          <p>
            Ekus Pharmacy, Korle Bu New Station <br /> Accra, Ghana
          </p>
        </div>

        {/* Links - About/Blog */}
        <div className="space-y-2 font-medium">
          <h2 className="font-semibold text-lg mb-2">Links</h2>
          <ul className="space-y-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4 font-medium">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.facebook.com/share/15g39RefY8/" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@findmekk888?si=s8SXgTJAezatS4nn" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/findmekk888?igsh=dDZycjJkZjJjd3Ri" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/miss-millicent-edem-091970118" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@findmekk888?_t=ZM-8vPtuhbbss3&_r=1" target="_blank" rel="noreferrer" className="bg-white text-[#aee97a] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#aee97a] hover:text-white">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="w-full mt-12 border-t border-white pt-4 text-center text-sm text-[#aee97a]">
        CrownMekk© 2025, Made with passion
      </div>
    </footer>
  );
};

export default Footer;
