import Link from "next/link";
import PageTitle from "../../_components/PageTitle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CreateCourse from "../../_components/courses/CreateCourse";
import DeleteButton from "../../_components/blog/DeleteButton";
import { ActionModal } from "../../_components/widgets/ActionModal";

export default function page({ params }) {
  const { id } = params;

  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <PageTitle title="Course Details" />
          <Link href={`/dashboard/courses/${id}/applicants`}>
            <Button variant="secondary" className="">Manage Applicants</Button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={`/dashboard/courses/${id}/modules`}>
            <Button variant="outline" className="">Add/Manage Modules</Button>
          </Link>
          <DeleteButton item="course" id={id} />
          <Link href={"/dashboard/courses"}>
            <Button className="text-white">View Courses</Button>
          </Link>
        </div>
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      <CreateCourse id={id} />
    </div>
  )
}