import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PageTitle from "../../_components/PageTitle";
import CreateCourse from "../../_components/courses/CreateCourse";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { getCategories } from "../../_actions/courseCategoryActions";
import { findCourseBySlug } from "@/app/(visitor-pages)/_actions/courses";
import { getStoredImages } from "../../_actions/storedImageActions";
import Loading from "../../loading";

export default async function page({ slug }) {
    const allCategories = await getCategories();
    var categories = [];
    var storedImages = [];

    if (allCategories) {
        categories = JSON.parse(allCategories);
    }

    if (slug) {
        var data = [];
        const fetchedCourse = await findCourseBySlug(slug);
        if (fetchedCourse) {
            data = JSON.parse(fetchedCourse);
            data.course.price = data.course?.price?.toString();
            data.course.duration = data.course?.duration?.toString();
            data.course.startDate = new Date(data.course?.startDate);
        }
    }

    const fetchedStoredImages = await getStoredImages();
    if (fetchedStoredImages) {
        storedImages = JSON.parse(fetchedStoredImages);
    }
    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Create New Course" />
                <Link href={"/dashboard/courses"}>
                    <Button className="text-white">View Courses</Button>
                </Link>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <CreateCourse 
                        categories={categories}
                        storedImages={storedImages}
                        course={data?.course}
                        slug={slug}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
