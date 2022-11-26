import React from 'react';

const SectionTitle = ({ title, color }) => {
  return (
    <div
      className={`text-[${color}] font-extrabold w-full flex justify-center py-3 md:py-8 md:text-4xl text-xl`}
    >
      {title}
    </div>
  );
};

export default SectionTitle;
