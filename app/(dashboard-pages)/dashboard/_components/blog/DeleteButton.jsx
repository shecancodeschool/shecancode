"use client"

import { useRouter } from "next/navigation"
import { deleteArticle } from "../../_actions/articlesActions"
import { DeleteDialog } from "../widgets/DeleteDialog"
import { deleteCourse } from "@/app/(visitor-pages)/_actions/courses";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export default function DeleteButton({ item, slug }) {
    const router = useRouter();
    return (
        <DeleteDialog 
            title={`Are you sure you want to delete this ${item}?`}
            desc={`This action cannot be undone. This will permanently delete your ${item} and remove your data from our servers.`}
            onClick={() => {
                if (item === "article") {
                    const response = deleteArticle(slug);
                    toast.success(response.message)
                    router.push("/dashboard/blog");
                } 
                if (item === "course") {
                    deleteCourse(slug);
                    router.push("/dashboard/courses");
                }
            }}
        />
    )
}
