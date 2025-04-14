import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col items-center">
    <img
      src={product.IMAGEURL}
      alt={product.PRODUCTNAME}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <h3 className="text-lg font-semibold text-center">{product.PRODUCTNAME}</h3>
    <p className="text-sm text-gray-600 text-center mb-2">
      {product.PRODUCTDESCRIPTION}
    </p>
    <span className="text-primary font-bold text-lg mb-2">
      ${product.PRICE}
    </span>

    {product.CTA && (
      <a
        href="https://wa.me/233505762889"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={product.CTA} alt="CTA" className="w-15 h-15 cursor-pointer" />
      </a>
    )}
  </div>
);

export default ProductCard;
