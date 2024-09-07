import Link from "next/link";
import PageTitle from "../../../_components/PageTitle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CreateCourse from "../../../_components/courses/CreateCourse";
import DeleteButton from "../../../_components/blog/DeleteButton";
import { getCategories } from "../../../_actions/courseCategoryActions";
import { getStoredImages } from "../../../_actions/storedImageActions";
import { findCourseBySlug } from "@/app/(visitor-pages)/_actions/courses";

export default async function page({ params }) {
  const { slug } = params;
  const rawCategoriesData = await getCategories();
  const categories = JSON.parse(rawCategoriesData);
  const rawStoredImages = await getStoredImages();
  const storedImages = JSON.parse(rawStoredImages);

  var course = {};
  if (slug) {
    var data = null;
    let rawCourseData = await findCourseBySlug(slug);
    if (typeof rawCourseData === "string") {
      data = JSON.parse(rawCourseData);
    }
    course = data.course;
  }

  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <PageTitle title="Course Details" />
          <Link href={`/dashboard/courses/course/${slug}/applicants`}>
            <Button variant="secondary" className="">Manage Applicants</Button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={`/dashboard/courses/course/${slug}/modules`}>
            <Button variant="outline" className="">Add/Manage Modules</Button>
          </Link>
          <DeleteButton item="course" slug={slug} />
          <Link href={"/dashboard/courses"}>
            <Button className="text-white">View Courses</Button>
          </Link>
        </div>
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      <CreateCourse
        categories={categories}
        storedImages={storedImages}
        course={course}
        slug={slug}
      />
    </div>
  )
}