import React, {useState} from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SideBar from './components/SideBar';
import Filter from './components/Filters';
import Pagination from './components/Pagination';
import { productsVi } from './services/mockAPI-vi';
import { productsEn } from './services/mockAPI-en';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState("1");
  const [showOption, setShowOption] = useState("16");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [isFreeShippingOn, setIsFreeShippingOn] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const vi = 'VI';
  const en = 'EN';

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSearchChange=(e)=>{
    setSearchTerm(e);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleShowChange = (e) => {
    setShowOption(e.target.value);
  };

  const handleClearFilters = () => {
    setSortOption('1');
    setShowOption('16');
    setSelectedCategory(null);
    setSelectedBrand(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandClick = (brands) => {
    setSelectedBrand(brands);
  };

  const handleFreeShippingToggle = (isOn) => {
    setIsFreeShippingOn(isOn);
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div className="App relative">
      <Header isEnglish={isEnglish} onSearch={handleSearch} Search={handleSearchChange}/>
      <div 
        className="absolute right-3 top-2 bg-white text-yellow-500 font-bold p-2 border border-white rounded-md"
        onClick={toggleLanguage}>
          {isEnglish ? vi : en}
      </div>
      <main className="container mx-auto p-4 pb-0">
        <Filter isEnglish={isEnglish} sortOption={sortOption} showOption={showOption} handleSortChange={handleSortChange} handleShowChange={handleShowChange} onClearFilters={handleClearFilters}/>
        <div className='flex'>
          <SideBar isEnglish={isEnglish} onCategorySelect={handleCategorySelect} onBrandClick={handleBrandClick} onFreeShipToggle={handleFreeShippingToggle} onRatingClick={handleRatingClick} />
          <div className="flex flex-col w-full relative">
            <div className="flex-1">
              <ProductList isEnglish={isEnglish} searchTerm={searchTerm} sortOption={sortOption} showOption={showOption} selectedCategory={selectedCategory} selectedBrand={selectedBrand} isFreeShippingOn={isFreeShippingOn} selectedRating={selectedRating} currentPage={currentPage} productsPerPage={parseInt(showOption, 10)} />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <Pagination products={isEnglish ? productsVi : productsEn} productsPerPage={parseInt(showOption, 10)} onPageChange={handlePageChange}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
