import React, { useState } from "react";
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export function FreeShip({ isEnglish }) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-left">{isEnglish ? vi.freeShip : en.freeShip}</h3>
      <div className="flex justify-between">
        <div className="text-left">{isEnglish ? vi.shipDesc : en.shipDesc}</div>
        <div>
          <button
            className={`w-12 h-6 rounded-full focus:outline-none transition-colors duration-300 ${
              isOn
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isOn ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </button>
          <span className="ml-2">{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </div>
  );
}
export default FreeShip;
