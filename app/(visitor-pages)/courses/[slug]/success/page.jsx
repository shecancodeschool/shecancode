import { findCourseBySlug } from '@/app/(visitor-pages)/_actions/courses';
import ReusableSection from '@/app/(visitor-pages)/_components/ReusableSection';
import { CheckCheckIcon } from 'lucide-react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

var metadata = {};

const page = async ({ params }) => {
    const { slug } = params;
    const response = await findCourseBySlug(slug);
    var data = null;
    if (typeof response === "string") {
        data = JSON.parse(response);
    }
    const { course, courseModules } = data;

    metadata = {
        title: `Application Successful | ${course.title}`,
        keywords: "SheCanCODE, Courses, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
    };

    if (!course) {
        return <div>Course not found</div>
    }

    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${course.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={jssStyles}>
                <div className={`flex flex-col items-start space-y-12 justify-center text-white w-full max-w-screen-xl`}>
                    <Link href={`/courses`} className="flex flex-row items-center justify-center gap-2">
                        <span className="bg-transparent rounded-full border-2 border-white p-1"><FaArrowLeft className="text-white" /></span>
                        <span className="text-base">Go back to Courses</span>
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">Application Submitted Successfully!</h1>
                    <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                        Your application for {course.title} has been successfully submitted. We will reach out to you soon.
                    </p>
                </div>
            </div>

            <ReusableSection>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex flex-col justify-between items-center space-y-4 text-black'>
                        <CheckCheckIcon className='w-16 h-16 text-green-500' />
                        <h1 className='text-3xl font-bold'>Congratulations!</h1>
                        <p className='text-lg font-medium text-center'>Your application for {course.title} has been successfully submitted.<br /> We will reach out to you soon</p>
                    </div>
                </div>
            </ReusableSection>
        </>
    )
}

export var metadata = metadata;

export default page