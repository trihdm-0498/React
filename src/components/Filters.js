import React from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function Filters({ isEnglish, sortOption, showOption, handleSortChange, handleShowChange, onClearFilters }) {

  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-1/5 border-b py-8">
        <div className="uppercase font-bold">{isEnglish ? vi.filter : en.filter}</div>
        <button onClick={onClearFilters}>{isEnglish ? vi.clearFilter : en.clearFilter}</button>
      </div>
      <div className="flex justify-end border-b py-8 w-full ml-12">
        <select className="mr-4" value={sortOption} onChange={handleSortChange}>
          <option value="1">{isEnglish ? vi.sortFeature : en.sortFeature}</option>
          <option value="2">{isEnglish ? vi.priceAsc : en.priceAsc}</option>
          <option value="3">{isEnglish ? vi.priceDesc : en.priceDesc}</option>
        </select>
        <select value={showOption} onChange={handleShowChange}>
          <option value="8">8{isEnglish ? vi.show : en.show}</option>
          <option value="16">16{isEnglish ? vi.show : en.show}</option>
          <option value="32">32{isEnglish ? vi.show : en.show}</option>
        </select>
      </div>
    </div>
  );
}
export default Filters;
