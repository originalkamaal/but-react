import React from 'react';
import BannerStats from '../assets/illustrations/BannerStats1';

const renderSwitch = ({
  title,
  className,
  btnTitile,
  btnLink,
  btnType = 0,
}) => {
  switch (btnType) {
    case 0:
      return (
        <div className="bg-black text-white font-[Outfit] font-extrabold text-xs flex items-center justify-between mx-4 px-4 rounded-md h-min p-4 md:h-[550px] ">
          <div className="w-50%">
            <h1>E-Commerce Solutions for all your Online Business Needs</h1>
          </div>
          <BannerStats className="" />
        </div>
      );
    default:
      return 'foo';
  }
};

const Banner = ({ title, btnTitile, btnLink, btnType = 0 }) => {
  return renderSwitch(btnType);
};

export default Banner;
