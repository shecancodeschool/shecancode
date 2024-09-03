
import { Separator } from "@/components/ui/separator";
import PageTitle from "../../_components/PageTitle";
import CreateCategory from "../../_components/courseCategory/CreateCategory";
import { getCategories } from "../../_actions/courseCategoryActions";
import { CourseCategoryTable } from "../../_components/tables/courses/CourseCategoryTable";
import { Suspense } from "react";
import Loading from "../../loading";

export default async function page() {
    const allCategories = await getCategories();
    const categories = JSON.parse(allCategories);

    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Course categories" />
                <CreateCategory />
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <Suspense fallback={<Loading />}>
                <CourseCategoryTable categories={categories} />
            </Suspense>
        </div>
    )
}
