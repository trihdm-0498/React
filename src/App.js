import React, {useState} from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SideBar from './components/SideBar';
import Filter from './components/Filters';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState("1");
  const [showOption, setShowOption] = useState("16");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
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

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  };
  
  return (
    <div className="App relative">
      <Header isEnglish={isEnglish} onSearch={handleSearch} Search={handleSearchChange}/>
      <div 
        className="absolute right-3 top-2 bg-white text-yellow-500 font-bold p-2 border border-white rounded-md"
        onClick={toggleLanguage}>
          {isEnglish ? vi : en}
      </div>
      <main className="container mx-auto p-4">
        <Filter isEnglish={isEnglish} sortOption={sortOption} showOption={showOption} handleSortChange={handleSortChange} handleShowChange={handleShowChange} onClearFilters={handleClearFilters}/>
        <div className='flex'>
          <SideBar isEnglish={isEnglish} onCategorySelect={handleCategorySelect} onBrandClick={handleBrandClick} />
          <ProductList isEnglish={isEnglish} searchTerm={searchTerm} sortOption={sortOption} showOption={showOption} selectedCategory={selectedCategory} selectedBrand={selectedBrand} />
        </div>
      </main>
    </div>
  );
}

export default App;
