import Image from "next/image";
import { getStoredImages } from "../../_actions/storedImageActions";
import CourseForm from "./CourseForm";
import { getCategories } from "../../_actions/courseCategoryActions";
import { findCourseById } from "@/app/(visitor-pages)/_actions/courses";

export default async function CreateCourse({ id }) {
  const allCategories = await getCategories();
  const categories = JSON.parse(allCategories);

  if (id) {
    const fetchedCourse = await findCourseById(id);
    var course = JSON.parse(fetchedCourse);
    course.price = course?.price?.toString();
    course.duration = course?.duration?.toString();
    course.startDate = new Date(course?.startDate);
  }

  const fetchedStoredImages = await getStoredImages();
  const storedImages = JSON.parse(fetchedStoredImages);

  return (
    <div className="mb-48">
      {course?.createdAt && <h4 className="text-lg font-bold">Created on: {new Date(course.createdAt).toUTCString()}</h4>}
      {course?.coverImage && <Image src={course?.coverImage} alt={course?.title} width={500} height={200} className="my-4 border-white border-2 rounded-md" />}
      <CourseForm
        categories={categories}
        storedImages={storedImages}
        id={id}
        course={course}
      />
    </div>
  )
}
