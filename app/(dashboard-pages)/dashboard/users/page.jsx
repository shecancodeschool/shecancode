import { getAllUsers } from "@/app/(authentication-pages)/_actions/auth"
import PageTitle from "../_components/PageTitle";
import { Separator } from "@/components/ui/separator";
import { UsersTable } from "../_components/tables/users/UsersTable";
import UpdateUser from "../_components/tables/users/UpdateUser";

export default async function page() {
  const response = await getAllUsers();
  var users = [];
  if (typeof response === "string") { 
    users = JSON.parse(response); 
  }

  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <PageTitle title="Users" />
        <UpdateUser />
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      <UsersTable users={users} />
    </div>
  )
}
