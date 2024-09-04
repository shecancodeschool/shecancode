import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CreatePost from "../../_components/blog/CreatePost";
import PageTitle from "../../_components/PageTitle";
import { getCategories } from "../../_actions/blogCategoryActions";
import { getArticleBySlug } from "../../_actions/articlesActions";
import { Suspense } from "react";
import Loading from "../../loading";
import { getStoredImages } from "../../_actions/storedImageActions";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function page({ params }) {
    const { slug } = params;

    const allCategories = await getCategories();
    const categories = JSON.parse(allCategories);
    const fetchedStoredImages = await getStoredImages();
    const storedImages = JSON.parse(fetchedStoredImages);

    var post = {};

    if (slug) {
        let fetchedPost = await getArticleBySlug(slug);
        console.log(fetchedPost);
        if (fetchedPost) {
            post = JSON.parse(fetchedPost);
        }
    }

    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Create Post" />
                <Link href={"/dashboard/blog"}>
                    <Button className="text-white">View Posts</Button>
                </Link>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <CreatePost
                        categories={categories}
                        storedImages={storedImages}
                        slug={slug}
                        post={post}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
