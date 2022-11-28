import React from 'react';
const HomeStats = () => {
  return (
    <div className="w-full bg-gray-100 py-10 grid grid-cols-1 lg:grid-cols-4 items-center justify-center lg:space-x-8 space-y-10 lg:space-y-0">
      <div className="flex items-center flex-col">
        <div className="text-[#6672E2] font-extrabold text-5xl">100+</div>
        <div className="text-budarkblue font-extrabold text-5xl leading-9 pt-2">
          Active<br></br>Clients
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="text-[#6672E2] font-extrabold text-5xl">2000+</div>
        <div className="text-budarkblue font-extrabold text-5xl leading-9 pt-2">
          Title
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="text-[#6672E2] font-extrabold text-5xl">35K</div>
        <div className="text-budarkblue font-extrabold text-5xl leading-9 pt-2">
          Title
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="text-[#6672E2] font-extrabold text-5xl">200+</div>
        <div className="text-budarkblue font-extrabold text-5xl leading-9 pt-2">
          Title
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
