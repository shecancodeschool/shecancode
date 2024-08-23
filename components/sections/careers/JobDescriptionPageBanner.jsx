import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function JobDescriptionPageBanner({ job }) {
    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("/scc34.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={jssStyles}>
            <div className={`flex flex-col gap-6 items-start justify-center text-white w-full max-w-screen-xl`}>
                <Link href={`/careers/#jobs`} className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-transparent rounded-full border-2 border-white p-1"><FaArrowLeft className="text-white"/></span>
                    <span className="text-base">Back to careers</span>
                </Link>
                <h1 className="text-3xl md:text-5xl font-extrabold w-full md:w-2/3 text-left">{job.title}</h1>
                <div className="flex mt-4 mb-2 items-start flex-wrap md:flex-nowrap justify-between w-full md:w-1/2">
                    <p className="text-lg flex gap-2 w-full md:w-fit md:flex-col md:text-xl text-gray-200">
                        <span className="text-base w-1/2 md:w-fit">Location</span>
                        <span className="w-1/2 font-extrabold md:w-fit">{job.location}</span>
                    </p>
                    <p className="text-lg flex gap-2 w-full md:w-fit md:flex-col md:text-xl text-gray-200">
                        <span className="text-base w-1/2 md:w-fit">Job Type</span>
                        <span className="w-1/2 font-extrabold md:w-fit">{job.type}</span>
                    </p>
                    <p className="text-lg flex gap-2 w-full md:w-fit md:flex-col md:text-xl text-gray-200">
                        <span className="text-base w-1/2 md:w-fit">Reporting To</span>
                        <span className="w-1/2 font-extrabold md:w-fit">{job.reportingTo}</span>
                    </p>
                </div>
                <Link href={`/careers/${job._id}/apply#content`} className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Apply Now</Link>
            </div>
        </div>
    )
}