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
"@context": "https://schema.org",
  "@type": "Organization",
  "name": "Courses",
  "url": "https://www.shecancodeschool.org/courses",
  "description": "Courses and program provided by SheCanCODE Bootcamp.",
  "image": "/F9.jpeg",
  "author": {
    "@type": "Organization",
    "name": "SheCanCODE Bootcamp",
    "url": "https://www.shecancodeschool.org",
    "image": "/F9.jpeg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.shecancodeschool.org/courses`
  }
}

const page = async () => {
  let category = 'all';
  var CourseCategories = null
  const allCategories = await getCategories();
  if (typeof allCategories === "string") {
    CourseCategories = JSON.parse(allCategories);
  }

  var Courses = [];

  if (category === 'all' || category === '') {
    let response = await getAllCourses(false);
    if (typeof response === "string") {
      Courses = JSON.parse(response);
    }
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
              {!Courses || Courses.length === 0 && (
                <div className="w-full flex justify-center items-center">
                  <p className="text-lg font-semibold text-gray-500">No courses available yet</p>
                </div>
              )}
            </div>
          </div>
        </ReusableSection>
      </div>
    </>
  );
};

export default page;
