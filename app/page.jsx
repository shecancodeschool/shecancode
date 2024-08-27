"use client";

import { useEffect, useState } from 'react';

import HomeBanner from "../components/sections/home/HomeBanner";
import HomeSloganSection from "../components/sections/home/HomeSloganSection";
import PartnersSection from "../components/sections/home/PartnersSection";
import CoursesSection from "../components/sections/home/CoursesSection";
import FaqSection from "../components/sections/home/faq/FaqSection";
import SloganSection from "../components/sections/home/SloganSection";
import StatisticsSection from "../components/sections/home/StatisticsSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import ReviewsSection from "../components/sections/home/review/ReviewsSection";
import PopupModel from "../components/sections/home/popup/PopupModel";
import ArticlesSection from '@/components/sections/home/ArticlesSection';

import HomePageData from "@/utils/homePageFakes";
import coursesFakes from "@/utils/coursesFakes";
import ArticlesFakes from "@/utils/blogsAndCategoriesFakes";

const jsonLd = {
  '@context': 'https://shecancode.vercel.app',
  '@type': 'Training Program',
  name: 'Welcome to SheCanCODE Bootcamp',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'Welcome to the best and the most intense coding training program for women in Rwanda.',
}

export default function Home() {
  const { CoursesData, ...rest } = coursesFakes;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // Show modal after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='relative'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {showModal && <PopupModel course={CoursesData[0]} closeModal={closeModal} />}
      <HomeBanner
        bannerData={HomePageData.bannerData}
        statistics={HomePageData.statistics}
        openCourse={CoursesData[0]}
      />
      <SloganSection
        slogansData={HomePageData.slogansData}
      />
      <HomeSloganSection
        sloganDescriptionData={HomePageData.sloganDescriptionData}
      />
      <CoursesSection
        homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
        courses={CoursesData}
      />
      <ArticlesSection articles={ArticlesFakes.blogs}/>
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
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
