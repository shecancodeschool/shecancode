"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSearchParams, useRouter } from "next/navigation";
import { createCat, updateCategory } from "../../_actions/blogCategoryActions";
import { LoadingButton } from "../widgets/Loader";
import { toast } from "sonner";
import { ActionModal } from "../widgets/ActionModal";

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
})


export default function CreateCategory() {
    const [open, setOpen] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const id = searchParams.get('id');
    const itemName = searchParams.get('itemName');


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    useEffect(() => {
        if (id) {
            setOpen(true);
            form.setValue("name", itemName);
        }
    }, [id, itemName, form]);

    useEffect(() => {
        if (!open) {
            router.replace("/dashboard/blog/categories");
        }
    }, [open, router]);

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values) {
        const { name } = values;

        if (id) {
            const res = await updateCategory({ name, id });
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
            }
            form.reset();
            setOpen(false);
        } else {
            const res = await createCat({ name });
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
            }
            form.reset();
            setOpen(false);
        }
    }

    return (
        <div>
            <ActionModal
                title={id ? "Update Category" : "Create Category"}
                desc={id ? "Change the name of the category" : "Create a new category"}
                onClick={() => console.log("clicked")}
                trigger={
                    <Button variant="default" className="text-white">Create</Button>
                }
                open={open}
                setOpen={setOpen}
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {
                            isLoading ? (
                                <LoadingButton btnText={"Loading..."} btnClass={"w-full"} btnVariant={"default"} />
                            ) : (
                                <Button type="submit" className="w-full">
                                    {id ? "Update category" : "Create category"}
                                </Button>
                            )
                        }
                    </form>
                </Form>
            </ActionModal>
        </div>
    )
}
