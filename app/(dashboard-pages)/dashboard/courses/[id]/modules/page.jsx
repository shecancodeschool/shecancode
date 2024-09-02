import { Button } from "@/components/ui/button";
import PageTitle from "../../../_components/PageTitle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { findCourseById } from "@/app/(visitor-pages)/_actions/courses";
import ModuleManager from "../../../_components/courses/ModuleManager";
import { getCourseModuleByCourseId } from "../../../_actions/courseModuleActions";

export default async function page({ params }) {
  const { id } = params;
  const response = await findCourseById(id);
  const course = JSON.parse(response);
  const resp = await getCourseModuleByCourseId(course._id);
  const modules = JSON.parse(resp);

  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 items-start justify-start">
          <PageTitle title="Manage Course Modules" />
          <p>
            <strong>Title: </strong>
            {course.title}
          </p>
        </div>
        <Link href={`/dashboard/courses/${id}`}>
          <Button className="text-white">Go back to course</Button>
        </Link>
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      
      <ModuleManager id={id} modules={modules}/>
    </div>
  )
}
