import React, { useState } from "react";
import { Link } from "react-router";
import { LucidePhoneCall } from "lucide-react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formData;
    const fullMessage = `Hello, my name is ${firstName} ${lastName}. Email: ${email}, Phone: ${phone}. Message: ${message}`;
    const whatsappURL = `https://wa.me/233505762889?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col px-4 py-20 sm:px-6 md:px-10 lg:px-10 bg-[#F5EDE0]">
      {/* Intro */}
      <div className="flex flex-col items-center text-center pb-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2 pt-5 text-[#5C3C53]">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-[#5C3C53] mx-auto rounded"></div>
      </div>
        <p className="text-sm md:text-base max-w-md mx-auto text-[#727272]">Have any questions or feedback? We’d love to hear from you.</p>
        <p className="text-sm md:text-base max-w-md mx-auto text-[#727272] font-medium">Available everyday – 24/7</p>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info */}
        <div className="w-full lg:w-[35vw] bg-[#5C3C53] text-white p-8 rounded-lg flex flex-col justify-between">
          <h3 className="font-bold text-black text-2xl mb-6">Contact Information</h3>

          <div className="flex flex-col gap-6 text-sm">
            <p className="flex gap-2 text-sm items-start">
              <LucidePhoneCall />
              <span>(+233) 505762889 / 249969499</span>
            </p>
            <p className="flex items-start text-sm gap-2">
              <MdOutlineMail className="text-xl" />
              <a
                href="mailto:Millyedem25@gmail.com"
                className="text-white underline hover:text-green-200"
              >
                Millyedem25@gmail.com
              </a>
            </p>
            <p className="flex text-sm items-start gap-2">
              <MdOutlineLocationOn className="text-xl" />
              <span>Ekus Pharmacy, Korle Bu New Station</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="https://www.facebook.com/share/15g39RefY8/" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaFacebookF />
              </Link>
              <Link to="https://youtube.com/@findmekk888" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaYoutube />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com/findmekk888" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/miss-millicent-edem-091970118" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaLinkedin />
              </Link>
              <Link to="https://www.tiktok.com/@findmekk888" target="_blank" rel="noreferrer" className="bg-white text-[#5C3C53] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5C3C53] hover:text-white transition">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[65vw] p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full gap-2">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-b border-[#8D8D8D] outline-none"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-b border-[#8D8D8D] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full gap-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-b border-[#8D8D8D] outline-none"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-b border-[#8D8D8D] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="border border-[#8D8D8D] pl-2 h-32 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#5C3C53] text-white px-12 py-3 rounded-md hover:bg-[#380b2b] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
