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
import { RiCalendarScheduleLine } from "react-icons/ri";
import HTMLReactParser from 'html-react-parser';
import { LuCalendarClock } from "react-icons/lu";
import { LuCalendarX2 } from "react-icons/lu";
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdAvTimer } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";

const CourseDetails = ({ course, modules }) => {
    const { title, subTitle, description, isOpen, slug, level, applicationDeadLine, endDate, feeDescription, location, schedule, startDate, duration, durationType, fee, prerequisites, coverImage, ...rest } = course;

    return (
        <ReusableSection>
            <div className='flex flex-col mx-auto w-full'>
                {/* First Section */}
                <div className="flex flex-wrap-reverse gap-8 items-start justify-between md:flex-nowrap w-full md:gap-0">
                    <div className="blog-container text-black w-full md:w-[70%] lg:w-[65%]">
                        <section className='section flex flex-col gap-4'>
                            {parse(description)}
                        </section>
                    </div>
                    <div className="w-full md:w-[27%] lg:w-[32%] flex flex-col space-y-4 md:mt-0 bg-sky-200 px-4 py-6 rounded-md border border-sky-400">
                        <div className="flex items-start gap-4 flex-nowrap">
                            <PiStepsDuotone className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Level</p>
                                <p className='text-base'>{level}</p>
                            </div>
                        </div>
                        {applicationDeadLine && <div className="flex items-start gap-4 flex-nowrap">
                            <LuCalendarClock className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Application Deadline</p>
                                <p className='text-base'>{new Date(applicationDeadLine).toDateString()}</p>
                            </div>
                        </div>}
                        {startDate && <div className="flex items-start gap-4 flex-nowrap">
                            <MdOutlineEditCalendar className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Start Date</p>
                                <p className='text-base'>{new Date(startDate).toDateString()}</p>
                            </div>
                        </div>}
                        {endDate && <div className="flex items-start gap-4 flex-nowrap">
                            <LuCalendarX2 className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>End Date</p>
                                <p className='text-base'>{new Date(endDate).toDateString()}</p>
                            </div>
                        </div>}
                        <div className="flex items-start gap-4 flex-nowrap">
                            <MdAvTimer className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Duration</p>
                                <p className='text-base'>{duration} {durationType}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 flex-nowrap">
                            <MdOutlineLocationOn className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Location</p>
                                <p className='text-base'>{location}</p>
                            </div>
                        </div>
                        {fee && <div className="flex items-start gap-4 flex-nowrap">
                            <RiPriceTag3Line className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Fee</p>
                                <p className='text-base flex flex-col'>
                                    <span>{fee}</span> 
                                    <span className='text-wrap text-sky-700'> {feeDescription}</span>
                                </p>
                            </div>
                        </div>}
                        {schedule && <div className="flex items-start gap-4 flex-nowrap">
                            <RiCalendarScheduleLine className='text-sky-600 min-w-[10%]' size={30} />
                            <div className="flex flex-col text-black">
                                <p className='text-lg font-extrabold'>Schedule</p>
                                <p className='text-base text-wrap'>{schedule}</p>
                            </div>
                        </div>}
                    </div>
                </div>

                {/* Second Section */}
                <div className="blog-container flex w-full flex-wrap justify-between items-start" style={{ marginTop: '2rem' }}>
                    <Image src={coverImage} alt={"Prerequisites"} className="rounded-lg mb-4 w-full lg:w-[65%]" width={800} height={500} />
                    <div className='mt-0 w-full lg:w-[33%] gap-4 md:gap-0 text-black'>
                        <section className='section'>
                            <h2 className={"text-2xl md:text-3xl mb-4 mt-0 md:mt-16 font-bold text-[#317ACC] text-left w-full"}>Course Prerequisites</h2>
                            {parse(prerequisites)}
                        </section>
                    </div>
                </div>

                {/* Course Modules  */}
                {modules?.length !== 0 && <div className="blog-container flex flex-col mt-8 gap-4 md:gap-1">
                    <h2 className={"text-2xl md:text-3xl mb-4 mt-0 md:mt-16 font-bold text-[#317ACC] text-left w-full"}>Modules</h2>
                    <Accordion type="single" collapsible className='bg-white shadow-md border border-slate-200 text-black p-4 md:p-12 rounded-md'>
                        {modules && modules.map((module, index) => (
                            <AccordionItem value={index + 1} key={index}>
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-left text-sky-800">{module.title}</AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg">
                                    <section className="section bg-sky-100 border border-sky-200 p-4 rounded-lg">
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
