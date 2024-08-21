import React from 'react';
import ReusableSection from '../../ReusableSection';

const PartnersSection = ({ partnersAndHiringCompaniesSectionData }) => {
  const { title, description, companies } = partnersAndHiringCompaniesSectionData;
  return (
    <ReusableSection>
      <h2 className="section-header">{title}</h2>
      <p className='text-black text-xl text-center w-full md:w-3/4'>{description}</p>
      <div className='flex justify-center items-center gap-16 flex-wrap mt-16'>
        {companies && companies.map((logo, index) => (
          <img key={index} src={`${logo.src}`} alt={logo.alt} className='md:w-fit max-h-12 md:max-h-20' />
        ))}
      </div>
    </ReusableSection>
  );
};

export default PartnersSection;
