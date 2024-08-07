import React, { useState } from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function Sliders({ isEnglish }) {
  const [price, setPrice] = useState([0, 100]);

  const [currentPrice, setCurrentPrice] = useState(1);

  const handlePriceChange = (event) => {
    const newPrice = event.target.value.split(",").map(Number);
    setPrice(newPrice);
    const [minPrice, maxPrice] = newPrice;
    const actualMinPrice = Math.round(1 + (minPrice / 100) * 4999);
    const actualMaxPrice = Math.round(1 + (maxPrice / 100) * 4999);
    setCurrentPrice([actualMinPrice, actualMaxPrice]);
  };

  return (
    <div className="p-4">
      <h3 className="text-gray-800 font-semibold mb-4 text-left text-lg sm:text-xl">
        {isEnglish ? vi.price : en.price}
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full max-w-xs sm:max-w-md text-gray-600 text-xs sm:text-sm mb-2">
          <span>$1</span>
          <span>${currentPrice[0]}</span>
          <span>$5000</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={price.join(",")}
          className="w-full max-w-xs sm:max-w-md h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}

export default Sliders;
