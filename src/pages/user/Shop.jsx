import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import FilterPage from '../auth/FilterPage';

const Shop = () => {
  const { data, error } = useGoogleSheetData("SHOP", "A1:G100");

  if (error) return <div className="text-center p-8 text-[#5C3C53]">Error loading data.</div>;
  if (!data || data.length === 0) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="bg-[#F5EDE0] min-h-screen px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <FilterPage products={data} />
      </div>
    </div>
  );
};

export default Shop;
