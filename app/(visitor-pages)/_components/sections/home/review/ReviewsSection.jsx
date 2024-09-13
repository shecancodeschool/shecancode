"use client"

import React, { useState, useRef } from 'react';
import ReviewComp from './reviewComp';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const ReviewsSection = ({ reviewsSectionContent }) => {
    const { title, subTitle, reviews } = reviewsSectionContent;

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
        <div className="py-20 w-full md:pb-24 bg-white" id="reviews">
            <div className='flex max-w-screen-xl px-16 md:px-20 mx-auto flex-col'>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                                    <Card >
                                        <CardContent className="flex items-start justify-center aspect-video bg-sky-200">
                                            <ReviewComp userAvatar={review.userAvatar} name={review.name} title={review.title} text={review.description} />
                                        </CardContent>
                                    </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default ReviewsSection;
