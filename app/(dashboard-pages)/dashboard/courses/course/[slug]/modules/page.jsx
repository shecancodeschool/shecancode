import { Button } from "@/components/ui/button";
import PageTitle from "../../../../_components/PageTitle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { findCourseBySlug } from "@/app/(visitor-pages)/_actions/courses";
import { getCourseModuleByCourseId } from "../../../../_actions/courseModuleActions";
import { Suspense } from "react";
import Loading from "@/app/(dashboard-pages)/dashboard/loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ModuleList from "@/app/(dashboard-pages)/dashboard/_components/courses/ModuleList";

export default async function page({ params }) {
  const { slug } = params;
  const response = await findCourseBySlug(slug);
  const data = JSON.parse(response);
  const resp = await getCourseModuleByCourseId(data?.course._id);
  const modules = JSON.parse(resp);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <div className="bg-color-grey">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 items-start justify-start">
              <PageTitle title="Manage Course Modules" />
              <p>
                <strong>Title: </strong>
                {data?.course.title}
              </p>
            </div>
            <Link href={`/dashboard/courses/course/${data?.course.slug}`}>
              <Button className="text-black" variant="secondary">Go back to course</Button>
            </Link>
          </div>
          <Separator className="my-4 border-b-[2px] border-sky-600" />
          <div className="flex justify-between items-end gap-4 flex-col">
            <Link href={`/dashboard/courses/course/${data?.course.slug}/modules/add`}>
              <Button className="text-white">Add New Module</Button>
            </Link>
            <ModuleList 
              modules={modules} 
              course={data?.course}
            />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
