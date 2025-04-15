import React from 'react';
import { X } from 'lucide-react'; // optional: or use any icon you prefer

const FilterControls = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  const handleClearSearch = () => {
    onSearchChange('');
    onCategoryChange('All'); // ✅ Reset to show all products
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 relative">
      {/* Categories - hidden on mobile */}
      <div className="hidden md:flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? 'bg-[#BD701A] text-white'
                : 'bg-white text-gray-700'
            } hover:bg-[#BD701A] hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border px-4 py-2 rounded-md w-full pr-10"
        />

        {/* Clear button */}
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterControls;
