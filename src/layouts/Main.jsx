import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar';

export default function Main() {
  return (
    <div>
      <Navbar theme="light" />

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
