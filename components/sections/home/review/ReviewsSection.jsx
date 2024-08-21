"use client"

import React, { useState, useRef } from 'react';
import ReviewComp from './reviewComp';

const ReviewsSection = ({ reviewsSectionContent }) => {
    const { title, subTitle, reviews} = reviewsSectionContent;
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 200;
    }
    
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 200;
    }

    // bg-[#092748]/100
    return (
        <div className="pt-16 w-full pb-16 md:pb-24 bg-gradient-to-tr from-gray-950 to-sky-400">
            <div className='flex max-w-screen-xl px-5 md:px-5 mx-auto flex-col'>
                <h2 className='section-header' style={{ color: 'white' }}>{title}</h2>
                <div className='w-full mx-auto flex flex-col md:flex-row gap-3 justify-between'>
                    <div className='flex flex-col justify-center'>
                        <h3 className="text-center text-2xl md:text-3xl md:text-left font-bold text-white font mb-8">{subTitle}</h3>
                        <div className="flex md:justify-start justify-end md:mt-8">
                            <button className="mr-2 border border-white p-2 md:p-5 rounded-full" onClick={scrollLeft}>
                                <svg viewBox="0 0 1024 1024" fill="white" height="1em" width="1em">
                                    <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                                </svg>
                            </button>
                            <button className='mr-2 border border-white p-2 md:p-5 rounded-full' onClick={scrollRight}>
                                <svg viewBox="0 0 1024 1024" fill="white" height="1em" width="1em">
                                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-3/4 carousel rounded-md flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar" >
                        {reviews.map((review, index) => (
                            <div key={index} className="px-2">
                                <ReviewComp imgSrc={review.image} name={review.name} title={review.title} text={review.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
