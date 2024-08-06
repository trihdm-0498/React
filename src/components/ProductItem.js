import React from 'react';

const ProductItem = ({ image, altText, category, name, description, price, rating }) => {
  return (
    <div className="relative p-4 rounded-lg shadow-sm">
      <article className="text-customBlack text-sm leading-5">
        <header className="h-[174px] w-[174px] flex items-center justify-center m-auto">
          <img src={image} alt={altText} className="h-auto max-h-full max-w-full" />
        </header>
        <div className="break-words flex flex-col justify-start items-start">
          <p className="text-customBlack opacity-70 uppercase mb-2 text-xs font-semibold leading-none">{category}</p>
          <h1 className="box-border text-sm flex justify-start items-start font-bold">{name}</h1>
          <p className="mt-[2px] flex justify-start items-start">{description}</p>
          <footer className="mt-[10px]">
            <p className="flex">
                <span className="text-customYellow text-[11px] font-semibold mr-1">$</span>
                <strong>{price}</strong>
                <span className="border border-[#e2a400]/50 rounded-sm ml-1 px-1 text-customYellow text-[11px] font-semibold flex items-center justify-center">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`}/>
                  {rating}
                </span>
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ProductItem;
