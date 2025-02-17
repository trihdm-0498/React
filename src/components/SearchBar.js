import React, { useState } from 'react';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const SearchBar = ({ onSearch,SearchItem, isEnglish }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    SearchItem(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    onSearch(searchTerm);
  };
  
  return (
    <div className="relative w-[740px] h-[64px]">
      <form onSubmit={handleSubmit} className="flex items-center h-full" role="search" noValidate>
        <input
          className="rounded-md pt-1 px-12 pb-0 pl-16 h-full w-full border-gray-300 active:border-customYellow text-customBlack"
          aria-label="Search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={isEnglish ? vi.searchPlaceholder : en.searchPlaceholder}
          spellCheck="false"
          maxLength="512"
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="absolute top-1/2 left-0 flex h-[64px] items-center justify-center -translate-y-1/2 w-[64px] text-customYellow py-0 px-4 pl-8"
          type="submit"
          title="Submit the search query"
        >
          <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="Search" className="text-customYellow"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
