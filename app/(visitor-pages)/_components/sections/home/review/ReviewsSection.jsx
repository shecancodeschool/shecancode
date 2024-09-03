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
    
    return (
        // <div className="pt-24 w-full pb-16 md:pb-24 bg-gradient-to-tr from-gray-950 to-sky-400">
        <div className="pt-16 w-full pb-16 md:pb-16 bg-white">
            <div className='flex max-w-screen-xl px-5 md:px-5 mx-auto flex-col'>
                <div className='w-full mx-auto flex flex-col md:flex-row gap-3 justify-between'>
                    <div className='flex flex-col justify-center'>
                        <h2 className="text-center text-2xl md:text-3xl md:text-left font-bold font mb-8 section-header">{subTitle}</h2>
                    </div>
                    <div className="md:w-4/5 carousel rounded-md flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar" >
                        {reviews.map((review, index) => (
                            <div key={index} className="px-2 py-10">
                                <ReviewComp userAvatar={review.userAvatar} name={review.name} title={review.title} text={review.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
