import React from "react";
import Image from '../../assets/images/backpro.jpg';

const Overview = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-8 py-6">
      {/* Banner Section */}
      <div className="h-64 w-full bg-gray-300 flex items-center justify-center text-white text-2xl font-bold rounded-lg">
      <img src={Image} alt="Studio" className="relative flex flex-col items-center justify-center h-64 w-full bg-cover bg-center text-white" />
      </div>

      {/* Profile Section */}
      <div className="relative -top-10 mx-auto w-4/5 bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-400 rounded-full border-4 border-white shadow-md" />
          <div>
            <h1 className="text-xl font-bold">Milly Edem</h1>
            <p className="text-gray-500">
              Envision greatness. Embrace innovation!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
            Facebook
          </span>
          <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
            Twitter
          </span>
          <span className="text-gray-500 hover:text-blue-500 cursor-pointer">
            YouTube
          </span>
          <button className="px-4 py-1 bg-[#7a4a12] text-white rounded-lg hover:bg-[#524230] transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="w-4/5 mx-auto mt-3 flex justify-between border-b pb-2">
        <div className="flex gap-6 font-semibold">
          <button className="text-gray-500 hover:text-blue-500">
            All Products
          </button>
        </div>
        <select className="border px-2 py-1 rounded">
          <option>Latest</option>
          <option>Popular</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto mt-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="w-full h-40 bg-gray-300" />
            <div className="p-4">
              <h2 className="text-lg font-bold">Product Name</h2>
              <p className="text-[#073180] font-semibold mt-1">GH₵ 100</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                This is a short product description. It gives users an idea of
                what the product is about.
              </p>
              <span className="inline-block mt-3 bg-[#DDEEFE] text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                10 in stock
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
