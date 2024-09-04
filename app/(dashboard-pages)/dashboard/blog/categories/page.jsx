import { Separator } from "@/components/ui/separator";
import PageTitle from "../../_components/PageTitle";
import CreateCategory from "../../_components/blogCategory/CreateCategory";
import { getCategories } from "../../_actions/blogCategoryActions";
import { Suspense } from "react";
import Loading from "../../loading";
import ListCategories from "../../_components/blog/ListCategories";
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
                        <PageTitle title="Blog category" />
                        <CreateCategory />
                    </div>
                    <Separator className="my-4" />
                    <ListCategories
                        categories={categories}
                    />
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}