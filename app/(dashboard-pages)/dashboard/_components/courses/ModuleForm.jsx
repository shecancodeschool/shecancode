"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import DOMPurify from "dompurify";
import dynamic from "next/dynamic";
import { useRef } from "react"
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createCourseModule, updateCourseModule } from "../../_actions/courseModuleActions";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "../widgets/Loader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
});

const formSchema = z.object({
    title: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    description: z.string().min(5, { message: "Description is required" }),
})
export default function ModuleForm({ selectedModule, course }) {
    const editor = useRef();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: selectedModule?.title || "",
            description: selectedModule?.description || ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const handleBlur = (content) => {
        form.setValue("description", content);
    }

    async function onSubmit(values) {
        const { title, description } = values;

        const formData = {
            id: selectedModule?._id,
            title,
            description: DOMPurify.sanitize(description),
            course: course?._id,
            courseSlug: course?.slug
        }

        if (selectedModule?._id) {
            const res = await updateCourseModule(formData);
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
                form.reset();
                router.push(`/dashboard/courses/course/${course?.slug}/modules`);
            }
        } else {
            const res = await createCourseModule(formData);
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
                form.reset();
                router.push(`/dashboard/courses/course/${course?.slug}/modules`);
            }
        }
    }

    return (
        <div className="text-black mb-4 flex justify-between flex-col items-start space-y-2 bg-white rounded-md p-4">
            <FormProvider {...form}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="w-full max-w-[500px]">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Post title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Module title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Post content</FormLabel>
                                    <FormControl>
                                        <JoditEditor
                                            ref={editor}
                                            value={field.value}
                                            config={{
                                                height: "600%",
                                                style: {
                                                    color: "#3f3f46"
                                                },
                                                useCommandShortcut: true,
                                                askBeforePasteHTML: false
                                            }}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={(newContent) => handleBlur(newContent)} // preferred to use only this option to update the content for performance reasons
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full max-w-[500px]">
                            {
                                isLoading ? (
                                    <LoadingButton btnText={"Loading..."} btnClass={"w-full"} btnVariant={"default"} />
                                ) : (
                                    <Button type="submit" className="w-fit">
                                        {selectedModule?._id ? "Update Module" : "Create Module"}
                                    </Button>
                                )
                            }
                        </div>
                    </form>
                </Form>
            </FormProvider>
        </div >
    )
}
