"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCourseModule, updateCourseModule } from "../../_actions/courseModuleActions";
import { useRef, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import JoditEditor from "jodit-react";
import { LoadingButton } from "../widgets/Loader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import parse from "html-react-parser";
import sanitize from "dompurify";
import { toast } from "sonner";

export default function ModuleManager(props) {
    const { id, modules } = props;
    const [selectedModule, setSelectedModule] = useState({});
    const formSchema = z.object({
        title: z.string().min(3, { message: "Title must be at least 3 characters." }),
        description: z.string().min(3, { message: "Description is required" }),
    });

    const editor = useRef(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: selectedModule?.title || "",
            description: selectedModule?.description || "",
        },
    });

    const handleBlurDescription = (description) => {
        form.setValue("description", description);
    };

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values) {
        const { title, description } = values;

        const formData = {
            id: selectedModule._id ? selectedModule._id : "",
            title,
            description: sanitize(description),
            course: id
        }

        if (selectedModule._id) {
            const res = await updateCourseModule(formData);
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
            }
            form.reset();
        } else {
            const res = await createCourseModule(formData);
            if (res?.error) {
                toast.error(res?.error);
            }
            if (res?.message) {
                toast.success(res?.message);
            }
            form.reset();
        }
    }

    return (
        <div className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="flex justify-start items-start bg-white rounded py-4 px-4">
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="w-full max-w-[500px]">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Course title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Course title" {...field} />
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
                                        <FormLabel>Module Description</FormLabel>
                                        <FormControl>
                                            <JoditEditor
                                                ref={editor}
                                                value={field.value}
                                                config={{
                                                    height: "800%",
                                                    style: {
                                                        color: "#3f3f46",
                                                        padding: "10px"
                                                    },
                                                    useCommandShortcut: true,
                                                    askBeforePasteHTML: false
                                                }}
                                                tabIndex={1}
                                                onBlur={(newContent) => handleBlurDescription(newContent)}
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
                                            {selectedModule?._id ? "Update" : "Add"}
                                        </Button>
                                    )
                                }
                            </div>
                        </form>
                    </Form>
                </div>
            </div>

            <div className="blog-container">
                {(modules && modules.length > 0) && <Accordion type="single" collapsible className="bg-white rounded py-4 px-4 w-full">
                    {modules?.map((module) => (
                        <AccordionItem key={module._id} value={module._id}>
                            <AccordionTrigger className="font-bold">{module.title}</AccordionTrigger>
                            <AccordionContent>
                                <section className="section flex flex-col gap-2">
                                    {parse(module.description)}
                                    <Button
                                        type='button'
                                        className="w-fit"
                                        variant="outline"
                                        onClick={() => {
                                            setSelectedModule(module);
                                            form.setValue("title", module.title);
                                            form.setValue("description", module.description);
                                        }}>
                                        Select
                                    </Button>
                                </section>
                            </AccordionContent>
                        </AccordionItem>))}
                </Accordion>}
            </div>
        </div>
    )
}
