import CourseBanner from '@/components/sections/courses/coursedetails/CourseBanner'
import CourseDetail from '@/components/sections/courses/coursedetails/CourseDetails'
import coursesFakes from '@/utils/coursesFakes';

const page = ({ params }) => {
  const { slug } = params;

  const course = coursesFakes.CoursesData.find((course) => course.slug === slug);

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
      <CourseDetail
        course={course}
      />
    </>
  )
}

export default page