import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#5C3A69] text-[#FAF3E3] w-full px-6 md:px-10 py-8">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 w-full">
        
        {/* Contact Info */}
        <div className="space-y-4 max-w-xs font-medium">
          <h1 className="text-2xl font-bold">CrownMekk</h1>
          <p className="text-lg">(+233) 5057 62889 / 2499 69499</p>
          <p>
            Ekus Pharmacy, Korle Bu New Station <br /> Accra, Ghana
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 font-medium">
          <h2 className="font-semibold text-lg mb-2">Links</h2>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-[#aee97a]">About</Link></li>
            <li><Link to="/blog" className="hover:text-[#aee97a]">Blog</Link></li>
            <li><Link to="/shop" className="hover:text-[#aee97a]">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-[#aee97a]">Contacts</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4 font-medium">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/share/15g39RefY8/" },
              { Icon: FaYoutube, href: "https://youtube.com/@findmekk888?si=s8SXgTJAezatS4nn" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaInstagram, href: "https://www.instagram.com/findmekk888?igsh=dDZycjJkZjJjd3Ri" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/miss-millicent-edem-091970118" },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@benzuraherbalproducts?_t=ZM-8vqBC4iUYRa&_r=1" }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="border border-[#FAF3E3] text-[#FAF3E3] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#F5EDE0] hover:text-[#5C3A69] transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Note */}
      <div className="w-full mt-12 border-t border-[#FAF3E3] pt-4 text-center text-sm text-white">
        CrownMekk© 2025, Made with passion
      </div>
    </footer>
  );
};

export default Footer;
