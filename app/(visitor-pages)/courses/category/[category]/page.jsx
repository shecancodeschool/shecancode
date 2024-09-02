import CoursesPageData from "@/utils/coursesPageFakes.js"
import Link from "next/link";
import CourseCard from "@/app/(visitor-pages)/_components/sections/courses/CourseCard";
import DefaultPageBanner from "@/app/(visitor-pages)/_components/DefaultPageBanner";
import PageTitle from "@/app/(visitor-pages)/_components/PageTitle";
import ReusableSection from "@/app/(visitor-pages)/_components/ReusableSection";
import { findCoursesByCategory } from "@/app/(visitor-pages)/_actions/courses";
import { getCategories } from "@/app/(dashboard-pages)/dashboard/_actions/courseCategoryActions";

const page = async ({ params }) => {
  const { category } = params;
  const allCategories = await getCategories();
  const CourseCategories = JSON.parse(allCategories);

  var selectedCategory = {};
  CourseCategories.forEach(function (item) {
    if (item.slug === category) {
      selectedCategory = item;
    }
  });

  const response = await findCoursesByCategory(selectedCategory.name);
  const Courses = JSON.parse(response);
  

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
              <Link
                href={`/courses`}
                className={`p-2 ${category === "all" ? 'bg-sky-300 text-sky-900' : ''} hover:text-sky-700 text-sky-500 border border-sky-500 hover:border-sky-700 rounded cursor-pointer`}
              >
                All
              </Link>
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
              {(Courses && Courses.length !== 0) && Courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
              {
                (Courses && Courses.length === 0) && (
                  <div className="w-full flex justify-center text-black items-center">
                    <h1 className="text-2xl text-center">
                      No courses found for this category.
                    </h1>
                  </div>
                )
              }
            </div>
          </div>
        </ReusableSection>
      </div>
    </>
  );
};

export default page;
