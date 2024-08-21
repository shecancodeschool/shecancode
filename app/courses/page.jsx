import React from "react";
import CoursesFilter from "../../components/sections/courses/CoursesFilter";
import CourseCard from "../../components/sections/courses/CourseCard";
import DefaultPageBanner from "../../components/DefaultPageBanner";
import CoursesPageData from "../../utils/coursesPageFakes.js"
import PageTitle from "../../components/PageTitle";
import ReusableSection from "../../components/ReusableSection";
import coursesFakes from "../../utils/coursesFakes";

const page = () => {
  const { CoursesData, CourseCategories } = coursesFakes;

  return (
    <>
      <DefaultPageBanner
        backgroundImage={CoursesPageData.backgroundImage}
        title={CoursesPageData.title}
        description={CoursesPageData.titleDescription}
        hasButton={false}
      />
      <PageTitle orientation={"center"} title={CoursesPageData.subTitle} />
      <ReusableSection isTopSection={"true"} >
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap mb-8">
            <CoursesFilter text="All Programme" bgText="bg-sky-300" Text="text-[#FFFF]" />
            {CourseCategories && CourseCategories.map((category, index) => (
              <CoursesFilter text={category} key={index} Text="text-[#C4C4C4]" />
            ))}
          </div>
          <div className="w-full flex justify-evenly flex-wrap md:flex-row bg-[#FEFEFE] rounded-md mt-12">
            {CoursesData && CoursesData.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </ReusableSection>
    </>
  );
};

export default page;
