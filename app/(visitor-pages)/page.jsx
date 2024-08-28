// import { getHomePageCourses } from "./_actions/courses"
import ArticlesSection from "./_components/sections/home/ArticlesSection";
import CoursesSection from "./_components/sections/home/CoursesSection";
import FaqSection from "./_components/sections/home/faq/FaqSection";
import HomeBanner from "./_components/sections/home/HomeBanner";
import HomeSloganSection from "./_components/sections/home/HomeSloganSection";
import PartnersSection from "./_components/sections/home/PartnersSection";
import ReviewsSection from "./_components/sections/home/review/ReviewsSection";
import ServicesSection from "./_components/sections/home/ServicesSection";
import StatisticsSection from "./_components/sections/home/StatisticsSection";

import HomePageData from "/utils/homePageFakes";
import ArticlesFakes from "/utils/blogsAndCategoriesFakes";
import PopupModel from "./_components/sections/home/popup/PopupModel";
import { getHomePageCourses } from "./_actions/courses";
import Ad from "./_components/sections/home/Ad";
import HomeBannerTwo from "./_components/sections/home/HomeBannerTwo";

const jsonLd = {
  '@context': 'https://shecancode.vercel.app',
  '@type': 'Training Program',
  name: 'Welcome to SheCanCODE Bootcamp',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'Welcome to the best and the most intense coding training program for women in Rwanda.',
}

const page = async () => {
  var courses = [];
  try {
    courses = await getHomePageCourses();
  } catch (error) {
    console.log(error);
  }

  const modelCourse = courses.length > 0 ? courses[0] : null;

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* {modelCourse && <PopupModel course={modelCourse} />} */}
      <HomeBannerTwo
        bannerData={HomePageData.bannerData}
        statistics={HomePageData.statistics}
        course={courses[0]}
      />
      {/* {modelCourse && <Ad course={modelCourse} />} */}
      <HomeSloganSection
        sloganDescriptionData={HomePageData.sloganDescriptionData}
      />
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
      />
      {(courses && courses.length > 0) && <CoursesSection
        homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
        courses={courses}
      />}
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
  )
}

export default page;