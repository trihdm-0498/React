import React, { useState } from "react";
import { brandsEn } from "../services/mockAPI-en";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function Brand({ isEnglish, onBrandClick }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState(new Set());

  const sortedBrands = [...brandsEn].sort((a, b) => b.count - a.count);

  const filteredBrands = searchTerm
    ? sortedBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sortedBrands.slice(0, 10);

  const handleBrandClick = (brandName) => {
    const newSelectedBrands = new Set(selectedBrands);
    if (newSelectedBrands.has(brandName)) {
      newSelectedBrands.delete(brandName);
    } else {
      newSelectedBrands.add(brandName);
    }
    setSelectedBrands(newSelectedBrands);
    onBrandClick(Array.from(newSelectedBrands));
  };

  return (
    <div className="p-4 w-full sm:w-64">
      <h3 className="text-gray-800 font-semibold mb-4 text-left text-base sm:text-lg">
        {isEnglish ? vi.brand : en.brand}
      </h3>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 sm:pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm"
          placeholder={isEnglish ? vi.brandSearch : en.brandSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {filteredBrands.map((brand) => (
          <div key={brand.name} className="flex items-center text-sm sm:text-base" onClick={() => handleBrandClick(brand.name)}>
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-800">{brand.name}</span>
            <span className="bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold px-2 py-1 rounded-md ml-2">
              {brand.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
