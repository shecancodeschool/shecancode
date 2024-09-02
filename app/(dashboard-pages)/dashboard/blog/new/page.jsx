import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CreatePost from "../../_components/blog/CreatePost";
import PageTitle from "../../_components/PageTitle";

export default function page() {  
    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Create Post" />
                <Link href={"/dashboard/blog"}>
                    <Button className="text-white">View Posts</Button>
                </Link>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <CreatePost />
        </div>
    )
}
