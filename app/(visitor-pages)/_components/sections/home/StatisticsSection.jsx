"use client"

import ReusableSection from '../../ReusableSection';
import Image from 'next/image';

const StatisticsSection = ({ statisticsSectionData, statistics }) => {
  const { title, description } = statisticsSectionData;

  return (
    <ReusableSection background={'#e6f5ff'}>
      <h2 className='section-header'>{title}</h2>
      <p className='text-center text-base md:text-xl max-w-screen-xl text-black/65'>{description}</p>
      <div className='flex flex-wrap justify-evenly w-full mt-3 items-baseline place-content-center'>
        {statistics && statistics.map((statistics, index) => (
          <div key={index} className='flex flex-col justify-center items-center md:gap-4 mb-8 md:mb-0 md:rounded-lg md:shadow-none mt-4 w-full sm:w-8 md:w-fit flex-shrink'>
            <Image src={statistics.icon} alt='student icon' width={50} height={50} className='w-1/4 md:w-1/3' />
            <div className='font-bold text-4xl text-sky-700 flex items-center gap-1'>
              {statistics.number}
              <span>{statistics.sign}</span>
            </div>
            <p className='font-medium text-base text-center md:text-xl text-black/65'>{statistics.title}</p>
          </div>
        ))}
      </div>
    </ReusableSection>
  )
}

export default StatisticsSection;
