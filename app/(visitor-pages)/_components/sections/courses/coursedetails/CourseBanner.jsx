"use client";

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";

export default function CourseBanner({ coverImage, title, subTitle, fee, slug, isOpen }) {
    const router = useRouter();
    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={jssStyles}>
            <div className={`flex flex-col items-start space-y-12 justify-center text-white w-full max-w-screen-xl`}>
                <button onClick={() => router.back()} className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-transparent rounded-full border-2 border-white p-1"><FaArrowLeft className="text-white" /></span>
                    <span className="text-base">Go back to Courses</span>
                </button>
                <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">{title}</h1>
                <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                    {subTitle}
                </p>
                <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                    Registration Fee: <span className="text-sky-400 font-extrabold">{fee}</span>
                </p>
            </div>
        </div>
    )
}