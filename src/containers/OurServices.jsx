import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
//title, desc, icon, link
const OurServices = () => {
  let services = [
    {
      title: 'New Account Registration',
      desc: 'Planing to start selling on online marketplaces? We will take care of account registration process and will get you started smoothly.',
      icon: '',
      link: '#',
    },
    {
      title: 'Account Management',
      desc: 'Need help to manage and grow your e-commerce business? Our expert account managers are here to help you.',
      icon: '',
      link: '#',
    },
    {
      title: 'Product Photoshoot',
      desc: 'Do you want to showcase your products with high quality Imagery? We can help you increase views for your product following marketplace guidelines.',
      icon: '',
      link: '#',
    },
    {
      title: 'Listing & Cataloging',
      desc: 'We are expert in creating apealing catalog with optimised content that will attract more customers.',
      icon: '',
      link: '#',
    },
    {
      title: 'Seller Training',
      desc: 'Understand from our exports, the different tools and policies needed to grow your business',
      icon: '',
      link: '#',
    },
    {
      title: 'Advertisements & Digital Marketing',
      desc: 'Getting low visibility, or you want to promote your products or brand? Let our Digital marketing experts manage your advertisements',
      icon: '',
      link: '#',
    },
    {
      title: 'Seller Account Reinstatement',
      desc: "Has your account been deactivated or been put on-hold? Our experts will help you reinstate your account and assist you to ensure your accounts don't get suspended in future.",
      icon: '',
      link: '#',
    },
    {
      title: 'Own Ecommerce Website / App',
      desc: 'Willing to start your online store website and/or app? Let us do it for you. We can build performing website, android and ios apps using modern technologies.',
      icon: '',
      link: '#',
    },
  ];
  return (
    <div className="">
      <SectionTitle title="Our Services" link="#" linkTitle="View All" />
      {services.map((el, i) => {
        <ServiceCard key={i} title={el.title} />;
      })}
    </div>
  );
};

export default OurServices;
