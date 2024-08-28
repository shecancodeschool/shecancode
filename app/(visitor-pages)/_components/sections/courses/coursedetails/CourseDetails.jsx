import Image from 'next/image';
import ReusableSection from '../../../ReusableSection';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

const CourseDetails = ({ course }) => {
    const { title, subTitle, detailedDescription, slug, modules, keyInfo, prerequisites, secondImage, ...rest } = course;

    return (
        <ReusableSection>
            <div className='flex flex-col mx-auto w-full'>
                {/* First Section */}
                <div className="flex flex-wrap justify-between md:flex-nowrap w-full">
                    <div className="w-full mb-4 md:w-[70%] lg:w-[65%]">
                        <h2 className={"text-2xl mb-4 md:text-4xl font-bold mx-auto text-[#317ACC] text-left"}>
                            {subTitle}
                        </h2>
                        {detailedDescription.paragraphOne && <p className="mb-4 font-base text-base md:text-xl text-justify text-black">
                            {detailedDescription.paragraphOne}
                        </p>}
                        {detailedDescription.paragraphTwo && <p className="mb-4 font-base text-base md:text-xl text-justify text-black">
                            {detailedDescription.paragraphTwo}
                        </p>}
                        {detailedDescription.paragraphThree && <p className="mb-4 font-base text-base md:text-xl text-justify text-black">
                            {detailedDescription.paragraphThree}
                        </p>}
                        {detailedDescription.paragraphFour && <p className="mb-4 font-base text-base md:text-xl text-justify text-black">
                            {detailedDescription.paragraphFour}
                        </p>}
                    </div>
                    <div className="w-full md:w-[27%] lg:w-[33%] flex flex-col space-y-4 mt-4 md:mt-0">
                        {keyInfo && keyInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-4 flex-nowrap md:flex-wrap">
                                <Image src={`/icon${index + 1}.png`} alt={`icon${index + 1}`} width={50} height={50} />
                                <div className="flex flex-col text-black">
                                    <p className='text-lg font-extrabold'>{info.title}</p>
                                    <p className='text-base'>{info.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-wrap justify-between md:items-start mt-16">
                    <Image src={secondImage} alt={"Prerequisites"} className="rounded-lg mb-4 w-full lg:w-[65%]" width={800} height={500} />
                    <div className='flex flex-col justify-start w-full lg:w-[33%] gap-4 md:gap-0'>
                        <h2 className={"text-2xl md:text-4xl font-bold text-[#317ACC] text-left w-full"}>Course Prerequisites</h2>
                        <ol className="list-decimal list-outside space-y-2 ml-6 text-base md:text-xl text-black">
                            {prerequisites && prerequisites.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* Course Modules  */}
                <div className="flex flex-col mt-16 gap-4 md:gap-1">
                    <h2 className={"text-2xl md:text-4xl font-bold text-[#317ACC] text-left w-full"}>{title} Modules</h2>
                    <Accordion type="single" collapsible className='bg-sky-200 text-black p-12 rounded-md'>
                        {modules && modules.map((module, index) => (
                            <AccordionItem value={index+1} key={index}>
                                <AccordionTrigger className="text-lg md:text-xl font-semibold">{module.question}</AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg">
                                    {module.answer}
                                </AccordionContent>
                            </AccordionItem>))}
                    </Accordion>
                </div>
                <div className='w-full mt-8 flex items-center justify-center'>
                    <Link href={`/courses/${slug}/apply`} className="bg-[#317ACC] w-fit text-center py-3 px-6 text-white rounded-md hover:bg-[#296494]">
                        Apply Now
                    </Link>
                </div>
            </div>
        </ReusableSection>
    );
};

export default CourseDetails;
