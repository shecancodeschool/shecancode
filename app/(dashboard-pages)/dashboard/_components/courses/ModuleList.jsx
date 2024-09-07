"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";
import Link from "next/link";
import { deleteCourseModule } from "../../_actions/courseModuleActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ModuleList({ modules, course }) {
    const router = useRouter();
    const handleDeleteModule = async (id) => {
        await deleteCourseModule(id);
        toast.success("Module deleted successfully!");
    }

    return (
        <div className="blog-container">
            {(modules && modules.length > 0) && <Accordion type="single" collapsible className="bg-white rounded py-4 px-4 w-full">
                {modules?.map((module) => (
                    <AccordionItem key={module._id} value={module._id}>
                        <AccordionTrigger className="font-bold text-sky-600">{module.title}</AccordionTrigger>
                        <AccordionContent>
                            <section className="section flex flex-col gap-2">
                                {parse(module.description)}
                                <div className="flex justify-between items-center">
                                    <Link href={`/dashboard/courses/course/${course.slug}/modules/${module._id}`}>
                                        <Button
                                            type='button'
                                            className="w-fit"
                                            variant="outline"
                                            size="sm"
                                        >
                                            View More
                                        </Button>
                                    </Link>
                                    <Button 
                                        type='button' 
                                        className="w-fit" 
                                        variant="destructive" 
                                        size="sm"
                                        onClick={() => handleDeleteModule(module._id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </section>
                        </AccordionContent>
                    </AccordionItem>))}
            </Accordion>}
        </div>
    )
}
