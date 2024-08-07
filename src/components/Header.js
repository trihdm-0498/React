import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { AlgoliaSvg } from './AlgoliaSvg';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const Header = ({ isEnglish, Search }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSearchChange=(e)=>{
    setSearchTerm(e);
    Search(e)
  }
  
  return (
    <header className="relative w-full min-h-[368px] text-center bg-transparent bg-cover bg-center flex flex-col justify-center items-center p-2 banner">
      <div className="header-background bg-cover bg-center bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-gradient from-[#fbc300] to-[#c98a00]">
        <div className="header-content text-white flex flex-col justify-center items-center">
          <AlgoliaSvg />
          <h1 className="mb-8 mt-8 text-2xl sm:text-3xl md:text-4xl font-light">{isEnglish ? vi.headerTitle : en.headerTitle}</h1>
          <SearchBar onSearch={handleSearch} SearchItem={handleSearchChange} isEnglish={isEnglish}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
