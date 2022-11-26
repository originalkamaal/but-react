import React from 'react';

const SectionTitle = ({ title, link, linkTitle }) => {
  return (
    <div className="">
      <div className="font-extrabold w-full flex justify-center py-3 md:py-8 md:text-4xl text-xl">
        {title}
      </div>
      {link && (
        <div className="text-[${color}] text-sm flex justify-end whitespace-nowrap px-2 md:px-10">
          <a href={link}>{linkTitle}</a>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
