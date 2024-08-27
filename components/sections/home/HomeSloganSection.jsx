import React from 'react';
import Link from 'next/link';

const HomeSloganSection = ({ sloganDescriptionData }) => {
    const { image, title, description, button } = sloganDescriptionData;
    return (
        <section className="h-auto mx-auto md:h-full overflow-hidden flex flex-col items-center justify-center">
            <div className='max-w-screen-xl mx-auto flex flex-wrap-reverse w-full items-center justify-between place-content-center px-4 py-16 md:py-24'>
                <div className="flex justify-center items-center w-full md:w-[48%] mt-8 md:mt-0">
                    {/* <Image
                        src={image.source}
                        alt={image.alt}
                        width={1000}
                        height={500}
                        className="md:rounded-lg w-full md:w-2/3"
                    /> */}
                    <iframe width="956" height="400" src="https://www.youtube.com/embed/MHZTscUaPpQ" title="SheCanCODE Cohort 2 Graduation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="flex flex-col gap-4 justify-start items-start text-left w-full md:w-[48%]">
                    <h2 className="section-header" style={{ textAlign: "left" }}>{title}</h2>
                    <p className="text-base md:text-xl w-full">{description}</p>
                    <div className="flex justify-start mt-2">
                        <Link href={button.location} className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">
                            {button.label}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSloganSection;
