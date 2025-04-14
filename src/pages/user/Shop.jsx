import React from 'react';
import useGoogleSheetData from '../../services/useGoogleSheetData';
import FilterPage from '../auth/FilterPage';

const Shop = () => {
  const { data, error } = useGoogleSheetData("SHOP", "A1:G100");

  if (error) return <div>Error loading data.</div>;
  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <div className='p-10 bg-[#f0c89c]'>
      <FilterPage products={data} />
    </div>
  );
};

export default Shop;
