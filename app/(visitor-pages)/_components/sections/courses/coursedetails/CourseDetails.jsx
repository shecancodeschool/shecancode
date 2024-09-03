import Image from 'next/image';
import ReusableSection from '../../../ReusableSection';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import parse from 'html-react-parser';
import { PiStepsDuotone } from "react-icons/pi";
import { IoLocationOutline, IoTimerOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LiaHourglassStartSolid } from "react-icons/lia";
import HTMLReactParser from 'html-react-parser';

const CourseDetails = ({ course, modules }) => {
    const { title, subTitle, description, isOpen, slug, level, location, schedule, startDate, duration, durationType, price, prerequisites, coverImage, ...rest } = course;

    return (
        <ReusableSection>
            <div className='flex flex-col mx-auto w-full'>
                {/* First Section */}
                <div className="flex flex-wrap justify-between md:flex-nowrap w-full">
                    <div className="blog-container text-black w-full md:w-[70%] lg:w-[65%]">
                        <section className='section mb-0'>
                            <h1>{subTitle}</h1>
                            {parse(description)}
                        </section>
                    </div>
                    <div className="w-full md:w-[27%] lg:w-[33%] flex flex-col space-y-4 mt-4 md:mt-0">
                        <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <PiStepsDuotone className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Level</p>
                                <p className='text-base'>{level}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <LiaHourglassStartSolid className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Start Date</p>
                                <p className='text-base'>{new Date(startDate).toDateString()}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <IoTimerOutline className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Duration</p>
                                <p className='text-base'>{duration} {durationType}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <IoLocationOutline className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Location</p>
                                <p className='text-base'>{location}</p>
                            </div>
                        </div>
                        {price && <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <IoPricetagsOutline className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Price</p>
                                {price === 0 ? <p className='text-base'>Free</p> : <p className='text-base'>{price} Rwf</p>}
                            </div>
                        </div>}
                        {schedule && <div className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                            <RiCalendarScheduleLine className='text-sky-600' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Schedule</p>
                                <p className='text-base'>{schedule}</p>
                            </div>
                        </div>}
                    </div>
                </div>

                {/* Second Section */}
                <div className="blog-container flex w-full flex-wrap justify-between items-start" style={{ marginTop: "2rem" }}>
                    <Image src={coverImage} alt={"Prerequisites"} className="rounded-lg mb-4 w-full lg:w-[65%]" width={800} height={500} />
                    <div className='mt-0 w-full lg:w-[33%] gap-4 md:gap-0 text-black'>
                        <section className='section'>
                            <h2>Course Prerequisites</h2>
                            {parse(prerequisites)}
                        </section>
                    </div>
                </div>

                {/* Course Modules  */}
                {modules?.length !== 0 && <div className="blog-container flex flex-col mt-16 gap-4 md:gap-1">
                    <h2 className={"text-2xl md:text-3xl mb-4 mt-0 md:mt-16 font-bold text-[#317ACC] text-left w-full"}>Modules</h2>
                    <Accordion type="single" collapsible className='bg-sky-200 text-black p-12 rounded-md'>
                        {modules && modules.map((module, index) => (
                            <AccordionItem value={index + 1} key={index}>
                                <AccordionTrigger className="text-lg md:text-xl font-semibold">{module.title}</AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg">
                                    <section className="section">
                                        {HTMLReactParser(module.description)}
                                    </section>
                                </AccordionContent>
                            </AccordionItem>))}
                    </Accordion>
                </div>}
                {isOpen === "Yes" && <div className='w-full mt-8 flex items-center justify-center'>
                    <Link href={`/courses/${slug}/apply`} className="bg-[#317ACC] w-fit text-center py-3 px-6 text-white rounded-md hover:bg-[#296494]">
                        Apply Now
                    </Link>
                </div>}
            </div>
        </ReusableSection>
    );
};

export default CourseDetails;
