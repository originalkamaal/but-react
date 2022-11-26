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
          <a href="">
            <img src={BannerStats} className="w-full px-2" />
          </a>
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
