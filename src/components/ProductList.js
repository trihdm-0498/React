import React from 'react';
import ProductItem from './ProductItem';
import { productsVi } from '../services/mockAPI-vi';
import { productsEn } from '../services/mockAPI-en';

const ProductList = ({
  isEnglish,
  searchTerm,
  sortOption,
  selectedCategory,
  selectedBrand,
  isFreeShippingOn,
  selectedRating,
  currentPage,
  productsPerPage
}) => {
  const filteredProductsVi = productsVi
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedBrand.length === 0 || selectedBrand.includes(product.brand)) &&
      (!isFreeShippingOn ? product.shipping === 'no' : product.shipping === 'yes') &&
      (selectedRating === null || product.rating <= selectedRating)
    );

  const filteredProductsEn = productsEn
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedBrand.length === 0 || selectedBrand.includes(product.brand)) &&
      (!isFreeShippingOn ? product.shipping === 'no' : product.shipping === 'yes') &&
      (selectedRating === null || product.rating <= selectedRating)
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProductsVi = sortedProductsVi.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentProductsEn = sortedProductsEn.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 h-[300px]">
        {isEnglish
          ? currentProductsVi.map((product, index) => (
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
          : currentProductsEn.map((product, index) => (
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
