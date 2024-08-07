import React from "react";
import CategoryDropDown from "./CategoryDropDown";
import Brand from "./Brand";
import Sliders from "./Sliders";
import FreeShip from "./FreeShip";
import Rating from "./Rating";

export function SideBar({ isEnglish, onCategorySelect, onBrandClick }) {
  return (
    <div className="w-64">
      <CategoryDropDown isEnglish={isEnglish} onCategorySelect={onCategorySelect} />
      <hr></hr>
      <Brand isEnglish={isEnglish} onBrandClick={onBrandClick} />
      <hr className="pb-4"></hr>
      <Sliders isEnglish={isEnglish} />
      <br></br>
      <hr className="pb-4"></hr>
      <FreeShip isEnglish={isEnglish} />
      <hr className="pb-4"></hr>
      <Rating isEnglish={isEnglish} />
    </div>
  );
}
export default SideBar;
