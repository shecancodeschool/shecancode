import CoursesPageData from "@/utils/coursesPageFakes.js"
import coursesFakes from "@/utils/coursesFakes";
import Link from "next/link";
import CourseCard from "@/app/(visitor-pages)/_components/sections/courses/CourseCard";
import DefaultPageBanner from "@/app/(visitor-pages)/_components/DefaultPageBanner";
import PageTitle from "@/app/(visitor-pages)/_components/PageTitle";
import ReusableSection from "@/app/(visitor-pages)/_components/ReusableSection";
import { findCoursesByCategory, getAllCourses } from "@/app/(visitor-pages)/_actions/courses";

const page = async ({ params }) => {
  const { category } = params;
  const { CourseCategories } = coursesFakes;
  var Courses = [];

  if (category === 'all' || category === '') {
    Courses = await getAllCourses();
  } else {
    Courses = await findCoursesByCategory(category);
  }
  
  return (
    <>
      <DefaultPageBanner
        backgroundImage={CoursesPageData.backgroundImage}
        title={CoursesPageData.title}
        description={CoursesPageData.titleDescription}
        hasButton={false}
      />
      <div className="bg-[#e6f2ff]" id="content">
        <PageTitle orientation={"center"} title={CoursesPageData.subTitle} />
        <ReusableSection isTopSection={"true"} background={'#e6f2ff'}>
          <div className="w-full flex flex-col">
            <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap mb-8">
              {CourseCategories && CourseCategories.map((item, index) => (
                <Link 
                  key={index} 
                  href={`/courses/category/${item.slug}`} 
                  className={`p-2 ${category === item.slug ? 'bg-sky-300 text-sky-900' : ''} hover:text-sky-700 text-sky-500 border border-sky-500 hover:border-sky-700 rounded cursor-pointer`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="w-full flex justify-evenly flex-wrap md:flex-row rounded-md mt-12">
              {Courses && Courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </ReusableSection>
      </div>
    </>
  );
};

export default page;
