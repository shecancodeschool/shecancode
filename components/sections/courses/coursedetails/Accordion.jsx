"use client";

import { useState } from 'react';

export default function Accordion({ list }) {
    return (
        <div className="text-left px-4 bg-slate-200">
            {list && list.map((item) => (
                <AccordionItem key={item.id} item={item} />
            ))}
        </div>
    );
};

const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 w-full">
            <button
                className="w-full flex px-1 py-2 md:px-4 items-center md:py-4 justify-between focus:outline-none text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    <span className="text-[16px] font-bold mr-4 text-[#317ACC]">{item.id < 10 ? `0${item.id}.` : `${item.id}.`}</span>
                    <span className="font-bold text-[#4B444D] text-base sm:text-xl">{item.question}</span>
                </div>
                <div>
                    <span className="text-[32px] text-[#317ACC] ml-auto">{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            {isOpen && item.answer && (
                <div className="p-4 text-left">
                    <p className="text-[16px] md:text-[20px] leading-[32px] text-[#4B444D] font-normal">{item.answer}</p>
                </div>
            )}
        </div>
    );
};