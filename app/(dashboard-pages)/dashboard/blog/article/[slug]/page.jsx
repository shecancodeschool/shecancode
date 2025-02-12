import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CreatePost from "../../../_components/blog/CreatePost";
import PageTitle from "../../../_components/PageTitle";
import DeleteButton from "../../../_components/blog/DeleteButton";
import { getCategories } from "../../../_actions/blogCategoryActions";
import { getStoredImages } from "../../../_actions/storedImageActions";
import { getArticleBySlug } from "../../../_actions/articlesActions";

export default async function page({ params }) {
    const { slug } = params;
    
    let allCategories = await getCategories();
    const categories = JSON.parse(allCategories);
    let rawStoredImages = await getStoredImages();
    const storedImages = JSON.parse(rawStoredImages);
    
    var post = {};
    
    if (slug) {
        let fetchedPost = await getArticleBySlug(slug);
        if (fetchedPost) {
            post = JSON.parse(fetchedPost);
        } else {
            return { notFound: true };
        }
    }

    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Edit Post" />
                <div className="flex gap-4">
                    <DeleteButton item="article" slug={slug} />
                    <Link href={"/dashboard/blog"}>
                        <Button className="text-white">View All Posts</Button>
                    </Link>
                </div>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <CreatePost
                categories={categories}
                storedImages={storedImages}
                slug={slug}
                post={post}
            />
        </div>
    )
}
