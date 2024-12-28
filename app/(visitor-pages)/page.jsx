import ArticlesSection from "./_components/sections/home/ArticlesSection";
import CoursesSection from "./_components/sections/home/CoursesSection";
import FaqSection from "./_components/sections/home/faq/FaqSection";
import HomeSloganSection from "./_components/sections/home/HomeSloganSection";
import ServicesSection from "./_components/sections/home/ServicesSection";
import PartnersSection from "./_components/sections/home/PartnersSection";

import HomePageData from "/utils/homePageFakes";
import { getHomePageCourses } from "./_actions/courses";
import HomeBannerTwo from "./_components/sections/home/HomeBannerTwo";
import ReviewsSection from "./_components/sections/home/review/ReviewsSection";
import StatisticsSection from "./_components/sections/home/StatisticsSection";
import { getOnlyPublishedArticlesForBlog } from "../(dashboard-pages)/dashboard/_actions/articlesActions";
import Loading from "../(dashboard-pages)/dashboard/loading";
import { Suspense } from "react";

export const metadata = {
  title: "Home - Welcome to the SheCanCODE Bootcamp",
  description: "Welcome to the best and the most intense coding training program for women in Rwanda.",
  keywords: "SheCanCODE, SheCanCode, SheCanCode Bootcamp, SheCanCode School, SheCanCODE Rwanda, Rwanda, Empowering Women, Training Bootcamps in Rwanda, Coding bootcamps in Rwanda, Coding bootcamp near me, IT Bootcamp in Rwanda, IT Bootcamp near me, Women in tech bootcamp in Rwanda, Women in tech bootcamp near me, Girls only bootcamp, girls only coding bootcamp near me, Coding Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda",
  openGraph: {
    title: "Home - Welcome to Igire Rwanda Organization",
    description: "Welcome to the best and the most intense coding training program for women in Rwanda.",
    url: "https://www.shecancodeschool.org",
    siteName: "SheCanCODE Bootcamp",
    images: [
      {
        url: "/F9.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Home - Welcome to SheCanCODE Bootcamp",
  "url": "https://www.shecancodeschool.org",
  "description": "Welcome to the best and the most intense coding training program for women in Rwanda.",
  "image": "/F8.jpeg",
  "author": {
    "@type": "Organization",
    "name": "SheCanCODE Bootcamp",
    "url": "https://www.shecancodeschool.org",
    "image": "/F8.jpeg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.shecancodeschool.org`
  }
}

const page = async () => {
  var courses = [];
  var featuredArticle = {};
  var articles = [];
  var featuredCourse = {};

  try {
    courses = await getHomePageCourses();
    if (courses.length > 0) {
      featuredCourse = courses.find(course => course.isFeatured === "Yes");
    }
    var data = null;
    var response = await getOnlyPublishedArticlesForBlog(true, 5);
    if (typeof response === "string") {
      data = JSON.parse(response);
    }

    featuredArticle = data.featuredArticle;
    articles = data.articles;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeBannerTwo
        bannerData={HomePageData.bannerData}
        statistics={HomePageData.statistics}
        course={featuredCourse}
      />
      <HomeSloganSection
        sloganDescriptionData={HomePageData.sloganDescriptionData}
      />
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
      />
      <Suspense fallback={<Loading />}>
        {(courses && courses.length > 0) && <CoursesSection
          homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
          courses={courses}
        />}
      </Suspense>
      <Suspense fallback={<Loading />}>
        {(articles && articles.length > 0) && <ArticlesSection
          featuredArticle={featuredArticle}
          articles={articles}
        />}
      </Suspense>
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