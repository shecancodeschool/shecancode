"use client";

import { useEffect, useState } from 'react'

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

import HomePageData from "@/utils/homePageFakes";
import coursesFakes from "@/utils/coursesFakes";

export default function Home() {
  const { CoursesData, ...rest } = coursesFakes;
  // States 
  const [homePageData, setHomePageData] = useState({});
  const [courses, setCourses] = useState([]);
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

  useEffect(() => {
    const fetchHomePageData = async () => {
      // This will be replaced by real data fetch 
      const data = await HomePageData;
      return data;
    };

    const fetchCoursesData = async () => {
      // This will be replaced by real api calls in integration 
      const data = await CoursesData;
      return data;
    };

    // Fetch Home page data
    fetchHomePageData()
      .then((response) => {
        setHomePageData(response);
      })
      .catch(error => {
        console.error(error);
      })

    // Fetch courses data
    fetchCoursesData()
      .then((response) => {
        setCourses(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <div className='relative'>
      {showModal && <PopupModel closeModal={closeModal} />}
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
      <PartnersSection
        partnersAndHiringCompaniesSectionData={HomePageData.partnersAndHiringCompaniesSectionData}
      />
      <StatisticsSection
        statisticsSectionData={HomePageData.statisticsSectionData}
        statistics={HomePageData.statistics}
      />
      <ServicesSection
        servicesSectionData={HomePageData.servicesSectionData}
      />
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
      />
      <FaqSection
        faqSectionData={HomePageData.faqsSectionData}
      />
    </div>
  );
}
