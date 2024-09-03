import Image from "next/image";
import { getStoredImages } from "../../_actions/storedImageActions";
import CourseForm from "./CourseForm";
import { getCategories } from "../../_actions/courseCategoryActions";
import { findCourseBySlug } from "@/app/(visitor-pages)/_actions/courses";

export default async function CreateCourse({ slug }) {
  const allCategories = await getCategories();
  const categories = JSON.parse(allCategories);

  if (slug) {
    const fetchedCourse = await findCourseBySlug(slug);
    var data = JSON.parse(fetchedCourse);
    data.course.price = data.course?.price?.toString();
    data.course.duration = data.course?.duration?.toString();
    data.course.startDate = new Date(data.course?.startDate);
  }

  const fetchedStoredImages = await getStoredImages();
  const storedImages = JSON.parse(fetchedStoredImages);

  return (
    <div className="mb-48">
      {data?.course.createdAt && <h4 className="text-lg font-bold">Created on: {new Date(data?.course.createdAt).toUTCString()}</h4>}
      {data?.course.coverImage && <Image src={data?.course.coverImage} alt={data?.course.title} width={500} height={200} className="my-4 border-white border-2 rounded-md" />}
      <CourseForm
        categories={categories}
        storedImages={storedImages}
        id={slug && data?.course._id}
        course={data?.course}
      />
    </div>
  )
}
