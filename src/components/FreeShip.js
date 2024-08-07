import React, { useState } from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function FreeShip({ isEnglish, onToggle }) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    onToggle(newIsOn);
  };

  return (
    <div className="p-4">
      <h3 className="text-gray-800 font-semibold mb-4 text-left text-lg sm:text-xl">
        {isEnglish ? vi.freeShip : en.freeShip}
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-left text-sm sm:text-base">
          {isEnglish ? vi.shipDesc : en.shipDesc}
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <button
            className={`w-10 h-5 rounded-full focus:outline-none transition-colors duration-300 ${
              isOn
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isOn ? "translate-x-5" : "translate-x-1"
              }`}
            ></div>
          </button>
          <span className="ml-2 text-sm sm:text-base">{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </div>
  );
}

export default FreeShip;
