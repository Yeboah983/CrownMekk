import React from "react";

const ProductCard = ({ product }) => {
  // WhatsApp number (international format, no "+")
  const phoneNumber = "233505762889";

  // Create WhatsApp message text
  const message = `Hi, I'm interested in the product: ${product.PRODUCTNAME}`;

  // Create full WhatsApp URL
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full">
      {/* Top Image */}
      <img
        src={product.IMAGEURL}
        alt={product.PRODUCTNAME}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* White Content Area */}
      <div className="bg-white p-4 flex flex-col items-center text-center rounded-b-2xl">
        <h3 className="text-lg font-semibold text-[#5C3C53] mb-1">
          {product.PRODUCTNAME}
        </h3>

        <p className="text-sm md:text-base max-w-md mx-auto text-[#41562B] mb-3">
          {product.PRODUCTDESCRIPTION}
        </p>

        <span className="text-[#85582F] font-bold text-base mb-3">
          ${product.PRICE}
        </span>

        {product.CTA && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5C3C53] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#380b2b] transition"
          >
            {product.CTA}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
