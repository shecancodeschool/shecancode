import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PageTitle from "../../_components/PageTitle";
import CreateCourse from "../../_components/courses/CreateCourse";

export default function page() {  
    return (
        <div className="bg-color-grey">
            <div className="flex justify-between items-center">
                <PageTitle title="Create New Course" />
                <Link href={"/dashboard/courses"}>
                    <Button className="text-white">View Courses</Button>
                </Link>
            </div>
            <Separator className="my-4 border-b-[2px] border-sky-600" />
            <CreateCourse />
        </div>
    )
}
