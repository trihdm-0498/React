import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          image={product.image}
          altText={product.altText}
          name={product.name}
          category={product.category}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
