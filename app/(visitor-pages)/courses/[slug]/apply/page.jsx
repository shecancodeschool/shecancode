import CourseBanner from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/CourseBanner';
import { findCourseBySlug } from '@/app/(visitor-pages)/_actions/courses';
import ApplyForCourseForm from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/ApplyForCourseForm';

var metadata = {};

export default async function Apply({ params }) {
  const { slug } = params;
  const response = await findCourseBySlug(slug);
  const data = JSON.parse(response);
  const { course, ...rest } = data;

  metadata = {
    title: `Apply for ${course.title}`,
    description: `Apply for ${course.title} at SheCanCode School`,
    keywords: "SheCanCODE, Courses, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
    openGraph: {
      title: `Apply for ${course.title}`,
      description: `Apply for ${course.title} at SheCanCode School`,
     ...{ images: [course.coverImage] },
    }
  }

  const jsonLd = {
    '@context': `https://www.shecancodeschool.org/courses/${course.slug}/apply`,
    '@type': 'Courses',
    name: `${course.title}`,
    image: `${course.coverImage}`,
    description: `${course.subTitle}`,
  }

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className='bg-white'>
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
      <ApplyForCourseForm 
        courseId={course._id} 
        registrationFee={course.fee} 
        courseName={course.title} 
        slug={course.slug}
      />
    </div>
  )
}

export var metadata = metadata;
