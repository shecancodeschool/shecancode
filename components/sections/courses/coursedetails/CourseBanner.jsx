import Link from "next/link";

export default function CourseBanner({ coverImage, title, description, slug, startDate, isOpen }) {
    console.log(coverImage);
    
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
                <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">{title}</h1>
                <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                    {description}
                </p>
                <Link href={`/courses/${slug}/apply`} className="bg-[#317ACC] py-3 px-6 text-white rounded-md hover:bg-[#296494]">
                    Apply Now
                </Link>
            </div>
        </div>
    )
}