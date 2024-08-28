import CourseBanner from '../../_components/sections/courses/coursedetails/CourseBanner';
import CourseDetails from '../../_components/sections/courses/coursedetails/CourseDetails';
import { findCourseBySlug } from '../../_actions/courses';

const page = async ({ params }) => {
  const { slug } = params;
  const course = await findCourseBySlug(slug); 

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <CourseBanner
        coverImage={course.coverImage}
        title={course.title}
        description={course.description}
        slug={course.slug}
        startDate={course.startDate}
        isOpen={course.isOpen}
      />
      <CourseDetails
        course={course}
      />
    </>
  )
}

export default page