import React from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function Filters({ isEnglish, sortOption, showOption, handleSortChange, handleShowChange, onClearFilters }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-between border-b py-4 sm:py-8 sm:w-1/5 mt-4 sm:mt-0">
        <div className="uppercase font-bold text-sm sm:text-base text-nowrap">{isEnglish ? vi.filter : en.filter}</div>
        <button className="sm:mt-0 text-sm sm:text-base text-nowrap ml-12" onClick={onClearFilters}>
          {isEnglish ? vi.clearFilter : en.clearFilter}
        </button>
      </div>
      <div className="flex flex-row justify-end border-b py-4 sm:py-8 w-full mt-4 sm:mt-0 ml-12">
        <select className="text-sm sm:text-base mr-4" value={sortOption} onChange={handleSortChange}>
          <option value="1">{isEnglish ? vi.sortFeature : en.sortFeature}</option>
          <option value="2">{isEnglish ? vi.priceAsc : en.priceAsc}</option>
          <option value="3">{isEnglish ? vi.priceDesc : en.priceDesc}</option>
        </select>
        <select className="text-sm sm:text-base" value={showOption} onChange={handleShowChange}>
          <option value="8">8 {isEnglish ? vi.show : en.show}</option>
          <option value="16">16 {isEnglish ? vi.show : en.show}</option>
          <option value="32">32 {isEnglish ? vi.show : en.show}</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
