import React from 'react';

import SectionTitle from '../core-components/SectionTitle';
const OurAchievements = ({ theme }) => {
  let color = theme == 'dark' ? '#ffffff' : '#000000';
  return (
    <div>
      <SectionTitle title="Why BrightUrban" color={color} />
    </div>
  );
};

export default OurAchievements;
