import Image from "next/image";
import CourseForm from "./CourseForm";

export default async function CreateCourse({ categories, storedImages, course, slug }) {
  return (
    <div className="mb-48">
      {course?.createdAt && <h4 className="text-lg font-bold">Created on: {new Date(course?.createdAt).toUTCString()}</h4>}
      {course?.coverImage && <Image src={course.coverImage} alt={course?.title} width={500} height={200} className="my-4 border-white border-2 rounded-md" />}
      <CourseForm
        categories={categories}
        storedImages={storedImages}
        id={slug && course?._id}
        course={course}
      />
    </div>
  )
}
