// "use client";

// import { useEffect, useState } from 'react';

import HomePageData from "/utils/homePageFakes";
// import coursesFakes from "/utils/coursesFakes";
import ArticlesFakes from "/utils/blogsAndCategoriesFakes";
import HomeBanner from './_components/sections/home/HomeBanner';
import HomeSloganSection from './_components/sections/home/HomeSloganSection';
import ReviewsSection from './_components/sections/home/review/ReviewsSection';
import CoursesSection from './_components/sections/home/CoursesSection';
import ArticlesSection from './_components/sections/home/ArticlesSection';
import StatisticsSection from './_components/sections/home/StatisticsSection';
import ServicesSection from './_components/sections/home/ServicesSection';
import PartnersSection from './_components/sections/home/PartnersSection';
import FaqSection from './_components/sections/home/faq/FaqSection';
// import PopupModel from './_components/sections/home/popup/PopupModel';

const jsonLd = {
  '@context': 'https://shecancode.vercel.app',
  '@type': 'Training Program',
  name: 'Welcome to SheCanCODE Bootcamp',
  image: 'https://www.shecancodeschool.org/F8.jpeg',
  description: 'Welcome to the best and the most intense coding training program for women in Rwanda.',
}

export default function Home() {
  // const { CoursesData, ...rest } = coursesFakes;
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 500); // Show modal after 3 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className='relative'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* {showModal && <PopupModel course={CoursesData[0]} closeModal={closeModal} />} */}
      <HomeBanner
        bannerData={HomePageData.bannerData}
        statistics={HomePageData.statistics}
        openCourse={CoursesData[0]}
      />
      {/* <SloganSection
        slogansData={HomePageData.slogansData}
      /> */}
      <HomeSloganSection
        sloganDescriptionData={HomePageData.sloganDescriptionData}
      />
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
      />
      <CoursesSection
        homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
      />
      <ArticlesSection
        articles={ArticlesFakes.blogs}
      />
      <StatisticsSection
        statisticsSectionData={HomePageData.statisticsSectionData}
        statistics={HomePageData.statistics}
      />
      <ServicesSection
        servicesSectionData={HomePageData.servicesSectionData}
      />
      <PartnersSection
        partnersAndHiringCompaniesSectionData={HomePageData.partnersAndHiringCompaniesSectionData}
      />
      <FaqSection
        faqSectionData={HomePageData.faqsSectionData}
      />
    </div>
  );
}
