import CoursesPageData from "@/utils/coursesPageFakes"
import ReusableSection from "../_components/ReusableSection";
import Link from "next/link";
import { openGraphImage } from "../../shared-metadata";
import CourseCard from "../_components/sections/courses/CourseCard";
import DefaultPageBanner from "../_components/DefaultPageBanner";
import PageTitle from "../_components/PageTitle";
import { findCoursesByCategory, getAllCourses } from "../_actions/courses";
import { getCategories } from "@/app/(dashboard-pages)/dashboard/_actions/courseCategoryActions";

export const metadata = {
  title: 'Courses',
  description: "Courses and program provided by SheCanCODE Bootcamp.",
  keywords: "SheCanCODE, Courses, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Courses',
    description: "Courses and program provided by SheCanCODE Bootcamp.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancodeschool.org/courses',
  '@type': 'Product',
  name: 'Courses and Programs',
  image: 'https://shecancodeschool.org/F8.jpeg',
  description: 'SheCanCODE Software Development Courses and Programs. Apply Today.',
}

const page = async () => {
  let category = 'all';
  
  const allCategories = await getCategories();
  const CourseCategories = JSON.parse(allCategories);

  var Courses = [];

  if (category === 'all' || category === '') {
    let response = await getAllCourses(false);
    Courses = JSON.parse(response);
  } else {
    let response = await findCoursesByCategory(category);
    Courses = JSON.parse(response);
  }


  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DefaultPageBanner
        backgroundImage={CoursesPageData.backgroundImage}
        title={CoursesPageData.title}
        description={CoursesPageData.titleDescription}
        hasButton={false}
      />
      <div id="content">
        <PageTitle orientation={"center"} title={CoursesPageData.subTitle} />
        <ReusableSection isTopSection={"true"}>
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
