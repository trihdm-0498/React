import React, { useState } from "react";
import { categoriesEn } from "../services/mockAPI-en";
import { categoriesVi } from "../services/mockAPI-vi";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function CategoryDropDown({ isEnglish, onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category === activeCategory ? null : category);
  };

  return (
    <div>
      <div className="px-4 py-2 md:px-4 md:py-3">
        <h3 className="font-medium text-gray-800 text-left text-sm md:text-base">
          {isEnglish ? vi.category : en.category}
        </h3>
      </div>
      <div>
        {isEnglish ? categoriesVi.map((category, index) => (
          <div className="category" key={index}>
            <div
              className={`flex justify-start items-center px-4 py-2 cursor-pointer ${
                activeCategory === index
                  ? "text-black-900 font-bold text-sm md:text-base"
                  : "text-gray-800 text-sm md:text-base"
              }`}
              onClick={() => toggleCategory(index)}
            >
              <img src={`${process.env.PUBLIC_URL}/images/categoryMain.svg`}              
                className={`w-4 h-4 text-gray-500 category-icon ${
                  activeCategory === index ? "rotate-180" : ""
                }`} />
              <span className="text-gray-800 ml-4 text-xs md:text-sm" onClick={() => handleCategoryClick(category.title)}>
                {category.title}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold px-2 py-1 rounded-md ml-2">
                10
              </span>
            </div>
            <div
              className={`category-content px-4 space-y-2 ${
                activeCategory === index ? "" : "hidden"
              }`}
            >
              <ul className="space-y-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex justify-start items-center px-4 py-1 cursor-pointer" onClick={() => handleCategoryClick(subcategory)}>
                      <img src={`${process.env.PUBLIC_URL}/images/categorySub.svg`}  
                        className={`w-4 h-4 text-gray-500 category-icon ${
                          activeCategory === index
                            ? "rotate-180 text-gray-900"
                            : ""
                        }`} />
                      <span className="text-gray-800 ml-4 text-xs md:text-sm">{subcategory}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold px-2 py-1 rounded-md ml-2">
                        10
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )) : categoriesEn.map((category, index) => (
          <div className="category" key={index}>
            <div
              className={`flex justify-start items-center px-4 py-2 cursor-pointer ${
                activeCategory === index
                  ? "text-black-900 font-bold text-sm md:text-base"
                  : "text-gray-800 text-sm md:text-base"
              }`}
              onClick={() => toggleCategory(index)}
            >
              <img src={`${process.env.PUBLIC_URL}/images/categoryMain.svg`}              
                className={`w-4 h-4 text-gray-500 category-icon ${
                  activeCategory === index ? "rotate-180" : ""
                }`} />
              <span className="text-gray-800 ml-4 text-xs md:text-sm" onClick={() => handleCategoryClick(category.title)}>
                {category.title}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold px-2 py-1 rounded-md ml-2">
                10
              </span>
            </div>
            <div
              className={`category-content px-4 space-y-2 ${
                activeCategory === index ? "" : "hidden"
              }`}
            >
              <ul className="space-y-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex justify-start items-center px-4 py-1 cursor-pointer" onClick={() => handleCategoryClick(subcategory)}>
                      <img src={`${process.env.PUBLIC_URL}/images/categorySub.svg`}  
                        className={`w-4 h-4 text-gray-500 category-icon ${
                          activeCategory === index
                            ? "rotate-180 text-gray-900"
                            : ""
                        }`} />
                      <span className="text-gray-800 ml-4 text-xs md:text-sm">{subcategory}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold px-2 py-1 rounded-md ml-2">
                        10
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDropDown;
