import { getCourseModuleById } from "@/app/(dashboard-pages)/dashboard/_actions/courseModuleActions";
import ModuleForm from "@/app/(dashboard-pages)/dashboard/_components/courses/ModuleForm";
import PageTitle from "@/app/(dashboard-pages)/dashboard/_components/PageTitle";
import Loading from "@/app/(dashboard-pages)/dashboard/loading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Link from "next/link";
import { Suspense } from "react";

export default async function page({ params }) {
    const { id, ...rest } = params;
    const rawSelectedModule = await getCourseModuleById(id);
    const selectedModule = JSON.parse(rawSelectedModule);
    const course = selectedModule.course;
    
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <div className="bg-color-grey">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 items-start justify-start">
                            <PageTitle title="Manage Course Modules" />
                            <p>
                                <strong>Title: </strong>
                                {course.title}
                            </p>
                        </div>
                        <Link href={`/dashboard/courses/course/${course?.slug}`}>
                            <Button className="text-black" variant="secondary">Go back to course</Button>
                        </Link>
                    </div>
                    <Separator className="my-4 border-b-[2px] border-sky-600" />
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold md:text-xl">Edit Module</h2>
                        <Link href={`/dashboard/courses/course/${course?.slug}/modules`}>
                            <Button className="text-white">View Modules</Button>
                        </Link>
                    </div>
                    <ModuleForm
                        selectedModule={selectedModule}
                        course={selectedModule?.course}
                    />
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}
