import React, { useState } from "react";
import FilterControls from "../../components/FilterControls";
import ProductCard from "../../components/ProductCard";

const FilterPage = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.CATEGORY === selectedCategory;
    const matchesSearch = product.PRODUCTNAME?.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-10 max-w-full mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2 pt-5 text-[#a65a14]">
          Products
        </h1>
        <div className="w-20 h-1 bg-[#BD701A] mx-auto rounded"></div>
      </div>

      <FilterControls
        categories={["All", ...new Set(products.map((p) => p.CATEGORY))]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={product.ID || index} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterPage;
