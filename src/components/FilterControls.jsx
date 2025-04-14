import React from 'react';

const FilterControls = ({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? "bg-[#BD701A] text-white"
                : "bg-white text-gray-700"
            } hover:bg-[#BD701A] hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border px-4 py-2 rounded-md w-full md:w-1/3"
      />
    </div>
  );
};

export default FilterControls;
