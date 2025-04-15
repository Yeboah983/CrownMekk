import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-[#f0c89c] rounded-2xl overflow-hidden shadow-md w-full">
    {/* Top Image */}
    <img
      src={product.IMAGEURL}
      alt={product.PRODUCTNAME}
      className="w-full h-48 object-cover rounded-t-2xl"
    />

    {/* White Content Area */}
    <div className="bg-white p-4 flex flex-col items-center text-center rounded-b-2xl">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {product.PRODUCTNAME}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {product.PRODUCTDESCRIPTION}
      </p>

      <span className="text-[#BD701A] font-bold text-base mb-3">
        ${product.PRICE}
      </span>

      {product.CTA && (
        <a
          href="#"
          className="bg-[#BD701A] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#a65a14] transition"
        >
          {product.CTA}
        </a>
      )}
    </div>
  </div>
);

export default ProductCard;
