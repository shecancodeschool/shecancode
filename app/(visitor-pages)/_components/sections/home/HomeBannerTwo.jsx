import Link from "next/link";
import CourseCardTwo from "../courses/CourseCardTwo";

const HomeBannerTwo = (props) => {
    const { bannerData, statistics, course } = props;
    const { title, backgroundImage, description, buttonOne, buttonTwo } = bannerData;

    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    };

    return (
        <div className='flex flex-col items-center justify-between mx-auto w-full pt-36 md:pt-36 overflow-hidden' style={jssStyles}>
            <div className={`flex justify-between flex-wrap w-full max-w-screen-xl px-5 md:px-4`}>
                <div className={`flex flex-col gap-6 items-start justify-center text-white w-full md:w-[48%]`}>
                    <h1 className="text-3xl mb-8 md:text-5xl font-extrabold text-center md:text-left">{title}</h1>
                    {description &&
                        <p className="text-lg md:text-xl text-center md:text-left w-full sm:w-full md:w-2/3">
                            {description}
                        </p>
                    }
                    <div className="mt-4 mb-8 flex gap-4 flex-wrap w-full">
                        {buttonOne.label &&
                            <Link href={buttonOne.location} className="bg-[#317ACC] text-center py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">
                                {buttonOne.label}
                            </Link>
                        }
                        {buttonTwo.label &&
                            <Link href={buttonTwo.location} className="border-[#317ACC] text-center text-[#317ACC] border-2 py-3 px-6 w-full md:w-fit rounded-md hover:text-white hover:border-white">
                                {buttonTwo.label}
                            </Link>
                        }
                    </div>
                </div>
                <div className={`flex flex-col gap-6 items-center justify-center text-white w-full md:w-[48%]`}>
                    {(course && course.title) && <CourseCardTwo course={course} />}
                </div>
            </div>
            <div className="flex flex-col bg-black mt-12 bg-opacity-50 w-full">
                <div className={`flex flex-col text-white w-full`}>
                    {statistics && <div className="hidden md:flex justify-center items-center border-b">
                        {statistics.map((stat, index) => (
                            <div className="px-12 py-8 flex flex-col text-center gap-2" key={index}>
                                <span className="font-extrabold text-3xl text-sky-500 flex gap-2 items-center mx-auto">
                                    {stat.number}
                                    <span>{stat.sign}</span></span>
                                <span className="text-lg">{stat.title}</span>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default HomeBannerTwo