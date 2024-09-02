"use client"

import { useRouter } from "next/navigation"
import { deleteArticle } from "../../_actions/articlesActions"
import { DeleteDialog } from "../widgets/DeleteDialog"
import { deleteCourse } from "@/app/(visitor-pages)/_actions/courses";

export default function DeleteButton({ item, id }) {
    const router = useRouter();
    return (
        <DeleteDialog 
            title={`Are you sure you want to delete this ${item}?`}
            desc={`This action cannot be undone. This will permanently delete your ${item} and remove your data from our servers.`}
            onClick={() => {
                if (item === "article") {
                    deleteArticle(id);
                    router.push("/dashboard/blog");
                } 
                if (item === "course") {
                    deleteCourse(id);
                    router.push("/dashboard/courses");
                }
            }}
        />
    )
}
