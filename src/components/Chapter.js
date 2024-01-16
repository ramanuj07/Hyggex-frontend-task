import React from "react";
import BodyImage from "../assets/images/Comp.png";
import HouseIcon from "../assets/images/house-icon.png";

const Chapter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-4 pb-[20px] ml-[102px] mt-[30px]">
        <ul className="flex items-center text-[rgba(105, 102, 113, 1)] text-inter font-medium text-base gap-2">
          <li>
            <img src={HouseIcon} className="w-6 h-6 mr-2"></img>
          </li>
          <li className="text-blue-800"> &gt; </li>
          <li className="text-inter font-medium text-base">Flashcard</li>
          <li className="text-blue-800"> &gt; </li>
          <li className="text-inter font-medium text-base">Mathematics</li>
          <li className="text-blue-800"> &gt; </li>
          <li className="text-inter font-medium text-base bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-transparent bg-clip-text">
            Relation and Function
          </li>
        </ul>
      </div>
      <div
        className="font-montserrat font-bold text-2xl leading-[39.01px] text-center w-[676px] h-[39px] ml-[
105px]"
      >
        <span className="bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-transparent bg-clip-text">
          Relations and Functions (Mathematics)
        </span>
      </div>

      <di className="flex flex-col items-center justify-center pt-[50px]">
        <div className="flex gap-[40px] mb-4 pb-[20px]">
          <ul className="flex gap-[40px] text-gray-600">
            <li className="text-blue-950 font-bold">Study</li>
            <li>Quiz</li>
            <li>Test</li>
            <li>Game</li>
            <li>Others</li>
          </ul>
        </div>

        <div className="w-[712px] h-[485.19px]">
          <img src={BodyImage} className="w-[712px]" />
        </div>
      </di>
    </div>
  );
};

export default Chapter;
