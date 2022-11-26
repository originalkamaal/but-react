import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
//title, desc, icon, link
const OurServices = () => {
  let services = [
    {
      title: 'New Account Registration',
      desc: 'Planing to start selling on online marketplaces? We will take care of account registration process and will get you started smoothly.',
      icon: '',
      link: '#',
    },
  ];
  return (
    <div>
      <SectionTitle title="Our Services" link="#" linkTitle="View All" />
    </div>
  );
};

export default OurServices;
