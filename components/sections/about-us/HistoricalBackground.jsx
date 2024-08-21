import React from 'react';
import ReusableSection from '../../ReusableSection';

const HistoricalBackground = ({ historicalBackground }) => {
    const { title, description, videoAddress } = historicalBackground;

    return (
        <ReusableSection flexDirection={"row"} isTopSection>
            <div className='flex justify-between flex-wrap'>
                <div className="flex flex-col w-full md:w-[48%] mb-8 md:mb-0">
                    <h3 className="section-sub-title">
                        {title}
                    </h3>
                    <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-[48%]">
                    <iframe
                        width=""
                        height="200"
                        src={videoAddress}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full md:h-[450px] object-cover"
                    />
                </div>
            </div>
        </ReusableSection>
    );
};

export default HistoricalBackground;
