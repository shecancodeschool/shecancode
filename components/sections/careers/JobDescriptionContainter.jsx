import React from 'react';
import ReusableSection from '../../ReusableSection';
import Link from 'next/link';

const JobDescriptionContainter = ({ job }) => {
    return (
        <ReusableSection>
            <div className="space-y-4">
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl text-[#317ACC]">
                        About the Company
                    </h1>
                    <p className="font-medium text-base md:text-xl text-[#000000]/65">
                        ShecanCode Limited is a Front-end that helps media companies to promote their films, web series, documentaries, digital products, etc. on YouTube. Our focus is on YouTube video production and growth hacking to increase the visibility and engagement of our client channels.
                    </p>
                </div>
                <div className=" flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl text-[#317ACC]">
                        About the Role
                    </h1>
                    <p className="font-medium text-base md:text-xl text-[#000000]/65 ">
                        We are seeking a highly motivated and detail-oriented YouTube Executive to join our team. The successful candidate will be responsible for managing our clients YouTube channels, developing and executing growth strategies, and creating engaging content.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl text-[#317ACC]">
                        Responsibilities
                    </h1>
                    <ul className="list-disc list-inside text-base md:text-xl text-[#000000]/65">
                        <li>Manage and grow client YouTube channels</li>
                        <li>Develop and execute growth strategies to increase visibility and engagement</li>
                        <li>Create and edit high-quality video content for YouTube</li>
                        <li>Collaborate with internal teams to ensure the delivery of high-quality work on time and within budget</li>
                        <li>Analyze and report on channel performance and provide recommendations for improvement</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl text-[#317ACC] ">
                        Requirements
                    </h1>
                    <ul className="list-disc list-inside text-base md:text-xl text-[#000000]/65">
                        {job.requirements && job.requirements.map((requirement, index) => (<li key={index}>
                            {requirement}
                        </li>))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl text-[#317ACC] ">
                        Benefits
                    </h1>
                    <ul className="list-disc list-inside text-base md:text-xl text-[#000000]/65">
                        {job.benefits && job.benefits.map((benefit, index) => (<li key={index}>
                            {benefit}
                        </li>))}
                    </ul>
                </div>

                {job.additionalInfo && <p className="font-medium text-base md:text-xl text-[#000000]/65 ">
                    If you are passionate about YouTube and have a proven track record of success, we would love to hear from you. Please apply with your resume and a cover letter that highlights your experience and qualifications for this role to hr@igirerwanda.org
                </p>}    
            </div>
            <div className='flex justify-start items-start w-full'>
                <Link href={`/careers/${job._id}/apply`} className="bg-[#317ACC] text-left mt-12 py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Apply Now</Link>
            </div>
        </ReusableSection>
    );
};

export default JobDescriptionContainter;
