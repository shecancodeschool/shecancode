import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeSloganSection = ({ sloganDescriptionData }) => {
    const { image, title, description, button } = sloganDescriptionData;
    return (
        <section className="bg-gradient-to-b from-sky-600 to-sky-200 h-auto mx-auto md:h-full overflow-hidden flex flex-col items-center justify-center">
            <div className='max-w-screen-xl mx-auto flex flex-wrap-reverse w-full items-center justify-center place-content-center px-4 py-16 md:py-24'>
                <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
                    <Image
                        src={image.source}
                        alt={image.alt}
                        width={1000}
                        height={500}
                        className="md:rounded-lg w-full md:w-2/3"
                    />
                </div>

                <div className="flex flex-col gap-4 justify-start items-start text-left w-full md:w-1/2">
                    <h2 className="section-header" style={{ textAlign: "left", color: "white" }}>{title}</h2>
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
