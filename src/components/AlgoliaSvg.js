import React from 'react';

export function AlgoliaSvg() {
  return (
    <a href="https://algolia.com" aria-label="Go to the Algolia website">
      <img src={`${process.env.PUBLIC_URL}/images/algolia.svg`} className="h-[24px] w-[92px]"/>
    </a>
  );
}
