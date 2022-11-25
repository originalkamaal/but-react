import React from 'react';
import { LogoBlack, LogoWhite } from '../assets/Logo';
import { ShoppingBag } from '../assets/ShoppingBag';

export default function Navbar({ theme }) {
  theme = theme == undefined ? 'dark' : theme;
  return theme == 'dark' ? (
    <div className="bg-black text-white flex justify-between py-4 px-10 items-center w-full">
      {/* Logo */}
      <div>
        <LogoWhite className="w-44" />
      </div>
      {/* Links */}
      <div className="flex items-center space-x-5 font-[Outfit]">
        <div>
          <a href="#" className="font-extrabold">
            Home
          </a>
        </div>
        <div>
          <a href="#">Services</a>
        </div>
        <div>
          <a href="#">Blog</a>
        </div>
        <div>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <a href="#">My Account</a>
        </div>
        {/* Cart*/}
        <div>
          <ShoppingBag className="w-8" color="#ffffff" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-between py-4 px-2 items-center w-full">
      {/* Logo */}
      <div>
        <LogoBlack className="w-44" />
      </div>
      {/* Links */}
      <div className="flex items-center space-x-5 font-[Outfit]">
        <div>
          <a href="#" className="font-extrabold">
            Home
          </a>
        </div>
        <div>
          <a href="#">Services</a>
        </div>
        <div>
          <a href="#">Blog</a>
        </div>
        <div>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <a href="#">My Account</a>
        </div>
        {/* Cart*/}
        <div>
          <ShoppingBag className="w-8" color="#000000" />
        </div>
      </div>
    </div>
  );
}
