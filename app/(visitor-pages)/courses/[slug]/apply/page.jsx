import CourseBanner from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/CourseBanner';
import { findCourseBySlug } from '@/app/(visitor-pages)/_actions/courses';
import ApplyForCourseForm from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/ApplyForCourseForm';

export default async function Apply({ params }) {
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
      <ApplyForCourseForm courseId={course._id.toString()}/>
    </>
  )
}
