"use client"
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-[#D9D9D9]/75 mt-6">
        <button
            className="w-full flex justify-between items-center text-left text-[#FAFAFA]/90 focus:outline-none py-4"
            onClick={onClick}
        >
            <span className='md:text-[20px] text-sm font'>{question}</span>
            <span className="ml-2">
                {isOpen ? (
                    <svg
                        className="w-5 h-5 text-[#FAFAFA]/90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5 text-[#FAFAFA]/90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                )}
            </span>
        </button>{isOpen && <p className="overflow-hidden transition-all duration-500 ease-in-out px-1 pb-4 text-xs md:text-[16px] font text-[#FAFAFA]/90">{answer}</p>}
    </div>
);

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>

            {items && items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}

            <div className=' flex my-9 justify-center gap-3 items-center'>
                <p className='font md:text-[16px] text-sm '>My question is not here.</p>
                <button className='p-2 uppercase md:text-[16px] text-xs font rounded bg-[#0B2B4E]' >Connect Us</button>
            </div>
        </div>
    );
};

export default Accordion;
