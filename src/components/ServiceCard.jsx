import React from 'react';

const ServiceCard = ({ theme }) => {
  let color = theme == 'dark' ? '#ffffff' : '#000000';
  return (
    <div>
      <SectionTitle title="Why BrightUrban" color={color} />
    </div>
  );
};

export default ServiceCard;
