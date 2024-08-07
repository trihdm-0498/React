import React from 'react';
import ProductItem from './ProductItem';
import { productsVi } from '../services/mockAPI-vi';
import { productsEn } from '../services/mockAPI-en';

const ProductList = ({ isEnglish, searchTerm, sortOption, showOption, selectedCategory, selectedBrand }) => {
  const filteredProductsVi = productsVi
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedBrand.length === 0 || selectedBrand.includes(product.brand))
    );

  const filteredProductsEn = productsEn
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedBrand.length === 0 || selectedBrand.includes(product.brand))
    );

  const sortedProductsVi = filteredProductsVi.sort((a, b) => {
    if (sortOption === '2') return a.price - b.price;
    if (sortOption === '3') return b.price - a.price;
    return 0;
  });

  const sortedProductsEn = filteredProductsEn.sort((a, b) => {
    if (sortOption === '2') return a.price - b.price;
    if (sortOption === '3') return b.price - a.price;
  
    return 0;
  });

  const endIndex = parseInt(showOption, 10);
  const productsToShowVi = sortedProductsVi.slice(0, endIndex);
  const productsToShowEn = sortedProductsEn.slice(0, endIndex);

  return (
    <div className="grid grid-cols-4 gap-y-4 h-[300px]">
      {isEnglish
        ? productsToShowVi.map((product, index) => (
            <ProductItem
              key={index}
              image={product.image}
              altText={product.altText}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
              rating={product.rating}
              isEnglish={isEnglish}
            />
          ))
        : productsToShowEn.map((product, index) => (
            <ProductItem
              key={index}
              image={product.image}
              altText={product.altText}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
              rating={product.rating}
              isEnglish={isEnglish}
            />
          ))}
    </div>
  );
};

export default ProductList;
