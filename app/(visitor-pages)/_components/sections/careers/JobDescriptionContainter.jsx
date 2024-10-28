import ReusableSection from '../../ReusableSection';
import Link from 'next/link';
import parse from 'html-react-parser';

const JobDescriptionContainter = ({ job }) => {
    return (
        <ReusableSection>
            <div className='blog-container flex flex-col justify-center items-center w-full'>
                <div className="section max-w-screen-md">
                    {parse(job?.content)}
                </div>
            </div>
            {/* <div className='flex justify-center items-center w-full'>
                <Link href={`/careers/${job._id}/apply`} className="bg-[#317ACC] text-left mt-12 py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Apply Now</Link>
            </div> */}
        </ReusableSection>
    );
};

export default JobDescriptionContainter;
