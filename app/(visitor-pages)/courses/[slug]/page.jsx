import CourseBanner from '../../_components/sections/courses/coursedetails/CourseBanner';
import CourseDetails from '../../_components/sections/courses/coursedetails/CourseDetails';
import { findCourseBySlug } from '../../_actions/courses';

const page = async ({ params }) => {
  const { slug } = params;
  const response = await findCourseBySlug(slug); 
  var data = null;
  if (typeof response === "string") {
    data = JSON.parse(response);
  }
  const { course, courseModules } = data;

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <CourseBanner
        coverImage={course.coverImage}
        title={course.title}
        subTitle={course.subTitle}
        slug={course.slug}
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

export default page