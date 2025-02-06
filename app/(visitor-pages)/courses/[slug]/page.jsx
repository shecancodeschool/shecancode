import CourseBanner from '../../_components/sections/courses/coursedetails/CourseBanner';
import CourseDetails from '../../_components/sections/courses/coursedetails/CourseDetails';
import { findCourseBySlug } from '../../_actions/courses';

var metadata = {};

const page = async ({ params }) => {
  const { slug } = params;
  const response = await findCourseBySlug(slug);
  var data = null;
  if (typeof response === "string") {
    data = JSON.parse(response);
  }
  const { course, courseModules } = data;

  metadata = {
    title: `${course.title}`,
    description: `${course.subTitle}`,
    keywords: "SheCanCODE, Courses, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
    openGraph: {
      title: `${course.title}`,
      description: `${course.subTitle}`,
      ...{ images: [course.coverImage] },
    },
  };
  
  const jsonLd = {
    '@context': `https://www.shecancodeschool.org/courses/${course.slug}`,
    '@type': 'Courses',
    name: `${course.title}`,
    image: `${course.coverImage}`,
    description: `${course.subTitle}`,
  }

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseBanner
        coverImage={course.coverImage}
        title={course.title}
        subTitle={course.subTitle}
        slug={course.slug}
        fee={course.fee}
        startDate={course.startDate}
        isOpen={course.isOpen}
      />
      <CourseDetails
        course={course}
        modules={courseModules}
      />
    </>
  )
}

export var metadata = metadata;

export default page