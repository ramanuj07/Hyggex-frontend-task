import React from "react";
import BodyImage from "../assets/images/Frame 44.png";
import PublishedIcon from "../assets/images/Published-left.png";
import AddIcon from "../assets/images/Frame 48.png";
import Menu from "../assets/images/Frame 47.png";
import Title from "../assets/images/title 01.png";

const Chapter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-4 pb-[20px] ml-[102px] mt-[30px]">
        <img src={Menu} alt="" />
      </div>
      <div
        className="font-montserrat font-bold text-2xl leading-[39.01px] text-center w-[676px] h-[39px] ml-[
105px] my-4"
      >
        <span className="bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-transparent bg-clip-text">
          Relations and Functions (Mathematics)
        </span>
      </div>

      <div className="flex flex-col items-center justify-center pt-[50px]">
        <div className="flex gap-[40px] mb-4 pb-[20px]">
          <img src={Title} alt="" />
        </div>

        <div className="w-[712px] h-[485.19px] mb-[60px]">
          <img src={BodyImage} className="" />
        </div>
      </div>

      <div className="flex justify-between mb-[120px]">
        <div className="flex items-center ml-[80px]">
          <img src={PublishedIcon} alt="" />
        </div>

        <div className="flex items-center">
          <img src={AddIcon} alt="" className="mr-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default Chapter;
