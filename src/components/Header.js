import React from 'react';
import SearchBar from './SearchBar';
import { AlgoliaSvg } from './AlgoliaSvg';

const Header = () => {
  return (
    <header className="relative w-full min-h-[368px] text-center bg-transparent bg-cover bg-center flex flex-col justify-center items-center p-2 banner">
      <div className="header-background bg-cover bg-center bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-gradient from-[#fbc300] to-[#c98a00]">
        <div className="header-content text-white flex flex-col justify-center items-center">
          <AlgoliaSvg />
          <h1 className="mb-[38px] mt-[38px] text-[38px] font-light">Stop looking for an item — find it.</h1>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
