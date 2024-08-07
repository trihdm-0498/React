import React from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const Rating = ({ isEnglish, onRatingClick }) => {
  const ratings = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
  ];

  const StarIcon = ({ filled }) => (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-400"}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled ? (
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
      ) : (
        <path d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
      )}
    </svg>
  );

  return (
    <div className="flex flex-col space-y-1 sm:space-y-4">
      <h3 className="text-gray-800 font-semibold mb-3 sm:mb-4 text-left text-base sm:text-lg">
        {isEnglish ? vi.rate : en.rate}
      </h3>
      {ratings.map((rating, index) => (
        <div
          key={index}
          className="flex justify-center space-x-1 sm:space-x-2"
          onClick={() => onRatingClick(rating.stars)}
        >
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating.stars} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Rating;
