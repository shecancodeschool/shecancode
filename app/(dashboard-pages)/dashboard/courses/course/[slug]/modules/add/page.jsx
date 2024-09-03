import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { findCourseBySlug } from "@/app/(visitor-pages)/_actions/courses";
import { Suspense } from "react";
import Loading from "@/app/(dashboard-pages)/dashboard/loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ModuleForm from "@/app/(dashboard-pages)/dashboard/_components/courses/ModuleForm";
import PageTitle from "@/app/(dashboard-pages)/dashboard/_components/PageTitle";

export default async function page({ params }) {
  const { slug } = params;
  const response = await findCourseBySlug(slug);
  const data = JSON.parse(response);

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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold md:text-xl">Create New Module</h2>
            <Link href={`/dashboard/courses/course/${data?.course.slug}/modules`}>
              <Button className="text-white">View Modules</Button>
            </Link>
          </div>
          <ModuleForm selectedModule={null} course={data?.course} />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
