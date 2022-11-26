import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import WhyBrightUrban from '../containers/WhyBrightUrban.jsx';

export default function Main() {
  let theme = 'light';
  return (
    <div>
      <Navbar theme={theme} />
      <Banner theme={theme} className="w-full" />
      <WhyBrightUrban
        theme={theme}
        title="Why BrightUrban"
        className="w-full"
      />

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
