"use client"

import Link from "next/link";
import AnimatedNumbers from "../../AnimatedNumbers";

const HomeBanner = (props) => {
    const { bannerData, statistics } = props;
    const { title, backgroundImage, description, buttonOne, buttonTwo, courseAdvertTitle } = bannerData;

    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    };

    return (
        <div className='flex flex-col items-center justify-between mx-auto w-full pt-36 md:pt-48 overflow-hidden' style={jssStyles}>
            <div className={`flex place-items-center`}>
                <div className={`flex flex-col gap-6 items-center px-4 md:px-12 justify-center text-white w-full max-w-screen-xl`}>
                    <h1 className="text-3xl mb-8 md:text-5xl font-extrabold text-center">{title}</h1>
                    {description &&
                        <p className="text-lg md:text-xl text-center w-full sm:w-full md:w-2/3">
                            {description}
                        </p>
                    }
                    <div className="mt-4 mb-8 flex gap-4 flex-wrap">
                        {buttonOne.label &&
                            <Link href={buttonOne.location} className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">
                                {buttonOne.label}
                            </Link>
                        }
                        {buttonTwo.label &&
                            <Link href={buttonTwo.location} className="border-[#317ACC] text-[#317ACC] border-2 py-3 px-6 w-full md:w-fit rounded-md hover:text-white hover:border-white">
                                {buttonTwo.label}
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-black mt-24 bg-opacity-50 w-full">
                <div className={`flex flex-col text-white w-full`}>
                    {statistics && <div className="hidden md:flex justify-center items-center border-b">
                        {statistics.map((stat, index) => (
                            <div className="px-12 py-8 flex flex-col text-center gap-2" key={index}>
                                <span className="font-extrabold text-3xl text-sky-500 flex gap-2 items-center mx-auto">
                                    <AnimatedNumbers n={stat.number} />
                                    <span>{stat.sign}</span></span>
                                <span className="text-lg">{stat.title}</span>
                            </div>
                        ))}
                    </div>}
                    {/* {openCourse && <div className="m-auto px-4 max-w-screen-xl">
                        <p className="flex gap-4 pt-4 pb-16 md:pb-8 flex-wrap">
                            <span className="font-extrabold text-orange-500">{courseAdvertTitle}</span>
                            <span className=" md:text-base">
                                {textLimiter(openCourse.description, 99)}
                                <Link href={`/courses/${openCourse.slug}`} className="text-[#6AACE8] inline"> Learn more</Link>
                            </span>
                        </p>
                    </div>} */}
                </div>
            </div>
        </div>
    )
}

export default HomeBanner