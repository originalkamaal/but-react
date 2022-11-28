import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import WhyBrightUrban from '../containers/WhyBrightUrban';
import OurServices from '../containers/OurServices';
import BlogsHome from '../containers/BlogsHome';
import OurAchievements from '../containers/OurAchievements';
import Testimonials from '../containers/Testimonials';
import TrustedBy from '../containers/TrustedBy';
import Footer from '../components/Footer';

export default function Main() {
  let theme = 'light';
  return (
    <div>
      <Navbar />
      <Banner />
      <WhyBrightUrban />
      <OurServices />
      <BlogsHome />

      <OurAchievements />
      <Testimonials />
      <TrustedBy />
      <Footer />

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
