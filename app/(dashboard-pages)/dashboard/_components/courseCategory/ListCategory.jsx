"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { EditIcon } from "lucide-react"
import Link from "next/link"
import { deleteCategory } from "../../_actions/courseCategoryActions"
import { toast } from "sonner"
import { DeleteModal } from "../widgets/DeleteModal"

export default function ListCategory({ categories }) {
    const deleteThisCat = async (id) => {
        const res = await deleteCategory(id);
        if (res?.error) {
            toast.error(res?.error);
        }
        if (res?.message) {
            toast.success(res?.message);
        }
    }

    return (
        <div className="w-full max-w-[600px]">
            <Table>
                <TableCaption>A list of categories.</TableCaption>
                <TableHeader className="bg-white">
                    <TableRow className="">
                        <TableHead className="w-[100px]">s/n</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories?.map((category, index) => (
                        <TableRow key={category._id} className="">
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{category.name}</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <span>
                                    <Link href={`/dashboard/blog/categories/?id=${category?._id}&itemName=${category?.name}`}>
                                        <EditIcon className="cursor-pointer" />
                                    </Link>
                                </span>
                                <span>
                                    <DeleteModal
                                        title={"Delete Catagory"}
                                        desc={"Are you sure you want to delete this category?"}
                                        pass={category?.name}
                                        onClick={() => deleteThisCat(category?._id)}
                                    />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
