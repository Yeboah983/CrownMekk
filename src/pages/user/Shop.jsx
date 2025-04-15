import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import FilterPage from '../auth/FilterPage';

const Shop = () => {
  const { data, error } = useGoogleSheetData("SHOP", "A1:G100");

  if (error) return <div className="text-center p-8 text-red-600">Error loading data.</div>;
  if (!data || data.length === 0) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="bg-[#f0c89c] min-h-screen px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <FilterPage products={data} />
      </div>
    </div>
  );
};

export default Shop;
