import { LucidePhoneCall } from "lucide-react";
import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router";
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

    const whatsappURL = `https://wa.me/233505762889?text=${encodeURIComponent(
      fullMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-col items-center justify-around gap-3 pb-5">
        <h1 className="font-bold text-[#BD701A] text-3xl">Get in Touch</h1>
        <p className="text-[#727272]">
          "Have any questions or feedback? We’d love to hear from you."
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Contact Info */}
        <div className="w-full lg:w-[35vw] flex flex-col justify-between bg-[#BD701A] text-white p-10">
          <h3 className="font-bold text-black text-2xl mb-6">
            Contact Information
          </h3>
          <div className="flex flex-col gap-6">
            <p className="flex gap-4 items-center">
              <LucidePhoneCall />
              <span>(+233) 505762889 / 249969499</span>
            </p>
            <p className="flex items-center gap-4">
              <MdOutlineMail className="text-2xl" />
              <a
                href="mailto:Millyedem25@gmail.com"
                className="text-white hover:text-green-400 underline"
              >
                Millyedem25@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4">
              <MdOutlineLocationOn className="text-2xl" />
              <span>Ekus Pharmacy, Korle Bu New Station</span>
            </p>
          </div>
          <div className="flex space-x-4 mt-5">
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

        {/* Form Section */}
        <div className="w-full lg:w-[65vw] p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex gap-10 flex-col md:flex-row">
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

            <div className="flex gap-10 flex-col md:flex-row">
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
                className="bg-black text-white px-12 py-3 rounded-md hover:bg-green-700 transition"
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
