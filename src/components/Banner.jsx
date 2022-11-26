import React from 'react';
import BannerStats from '../assets/illustrations/BannerStats1.png';

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
        <div className="relative text-white w-full font-[Outfit] font-extrabold text-xs flex items-center justify-between h-min">
          <img src={BannerStats} className="w-full px-2" />
          <div className="absolute w-1/2 md:w-2/5 left-0 px-10">
            <h1 className="lg:text-5xl xs:text-sm text-lg md:leading-snug leading-4">
              E-Commerce Solutions for all your Online Business Needs.
            </h1>
            <h1 className="lg:text-5xl xs:text-sm text-lg bg-[#6672E2] w-min px-2 py-1 rounded-md mt-2 md:mt-4">
              GET&nbsp;STARTED
            </h1>
          </div>
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
