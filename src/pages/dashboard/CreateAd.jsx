import React from "react";
import { useNavigate } from "react-router";

const CreateAd = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // The form handling logic is here but without the integration to apiAddAdvert
    console.log("Form submitted");
    navigate("/dashboard/ads"); 
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 px-4">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          Post an Ad
        </h1>

        <div className="space-y-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <select
            name="category"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a category</option>
            <option value="hair Restoration & growth ">
            Hair Restoration & Growth 
            </option>
            <option value="luxury hair care">Luxury Hair Care</option>
            <option value="beauty & wellness ">Beauty & Wellness </option>
          </select>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            name="name"
            placeholder="Ad title"
            required
          />

          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-100">
            <span className="text-gray-700 font-semibold mr-2">GH₵</span>
            <input
              className="w-full bg-transparent focus:outline-none"
              type="number"
              min={0}
              name="price"
              placeholder="0.00"
              required
            />
          </div>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="file"
            name="pictures"
            accept="image/*"
            required
          />

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            name="description"
            placeholder="Description"
            rows="2"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Post Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAd;
