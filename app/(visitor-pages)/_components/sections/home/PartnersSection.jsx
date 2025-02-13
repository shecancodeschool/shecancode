import ReusableSection from '../../ReusableSection';
import Image from 'next/image';

const PartnersSection = ({ partnersAndHiringCompaniesSectionData }) => {
  const { title, description, companies } = partnersAndHiringCompaniesSectionData;
  return (
    <ReusableSection>
      <h2 className="section-header">{title}</h2>
      <p className='text-black text-xl text-center w-full md:w-3/4'>{description}</p>
      <div className='flex justify-center items-center gap-16 flex-wrap mt-16'>
        {companies && companies.map((logo, index) => (
          <Image key={index} src={`${logo.src}`} alt={logo.alt} width={80} height={200} className='md:w-fit' />
        ))}
      </div>
    </ReusableSection>
  );
};

export default PartnersSection;
