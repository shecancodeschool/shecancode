
import { Separator } from "@/components/ui/separator";
import PageTitle from "../../_components/PageTitle";
import CreateCategory from "../../_components/courseCategory/CreateCategory";
import { getCategories } from "../../_actions/courseCategoryActions";
import { Suspense } from "react";
import Loading from "../../loading";
import ListCourseCategories from "../../_components/courses/ListCourseCategories";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function page() {
    const allCategories = await getCategories();
    var categories = [];
    if (typeof allCategories === "string") {
        categories = JSON.parse(allCategories);
    }

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <div className="bg-color-grey">
                    <div className="flex justify-between items-center">
                        <PageTitle title="Course categories" />
                        <CreateCategory />
                    </div>
                    <Separator className="my-4 border-b-[2px] border-sky-600" />
                    <ListCourseCategories categories={categories} />
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}
