import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CreatePost from "../../_components/blog/CreatePost";
import PageTitle from "../../_components/PageTitle";
import DeleteButton from "../../_components/blog/DeleteButton";

export default async function page({ params }) {
    const { id } = params;
    
    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Edit Post" />
                <div className="flex gap-4">
                    <DeleteButton item="article" id={id} />
                    <Link href={"/dashboard/blog"}>
                        <Button className="text-white">View All Posts</Button>
                    </Link>
                </div>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <CreatePost id={id} />
        </div>
    )
}
