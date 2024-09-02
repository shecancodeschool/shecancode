import Link from "next/link";
import PageTitle from "../_components/PageTitle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllCourses } from "@/app/(visitor-pages)/_actions/courses";
import ListCourses from "../_components/courses/ListCourses";

export default async function page() {
  const response = await getAllCourses(true);
  const courses = JSON.parse(response);
  
  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <PageTitle title="Courses" />
        <Link href={"/dashboard/courses/new"}>
          <Button className="text-white">Add New Course</Button>
        </Link>
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      <ListCourses courses={courses} />
    </div>
  )
}