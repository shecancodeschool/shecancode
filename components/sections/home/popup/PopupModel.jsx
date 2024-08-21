import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { IoIosCloseCircle } from "react-icons/io";

const ModalContent = {
    backgroundImage: "/cfb.jpg",
    title: "Summer Coding Camp",
    duration: {
        value: 15,
        type: "Weeks"
    },
    subTitle: "Learn coding with us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod.",
    address: "/courses/advanced-web-developmet"
}

export default function PopupModel({ closeModal }) {
    // console.log(ModalContent.backgroundImage);

    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgb(0, 61, 102, 0.9), rgb(0, 138, 230, 0.6)), url(${ModalContent.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    };

    return (
        <div className={'flex fixed left-0 top-0 w-full h-full z-50 overflow-auto bg-black bg-opacity-60 justify-center items-center'}>
            <div style={jssStyles} className={"bg-[#fefefe] px-2 pb-2 gap-8 md:px-5 md:pb-5 border border-sky-500 w-full md:w-4/5 max-w-screen-md text-center"}>
                <button 
                    className={'text-slate-200 float-right text-3xl font-bold hover:text-white focus:text-white hover:cursor-pointer focus:cursor-pointer mb-4'} 
                    onClick={closeModal}>
                        <IoIosCloseCircle />
                </button>
                <div className='flex flex-col gap-4 text-white w-full'>
                    <div className='flex justify-end'>
                        <Image src={'/logoscc.png'} className='bg-white p-2' height={100} width={100} />
                    </div>
                    <div className='flex gap-4 justify-start'>
                        <div className='flex flex-col gap-2 justify-start'>
                            <h2 className="font-bold text-7xl md:text-9xl">{ModalContent.duration.value}</h2>
                            <span className='text-sky-400 text-xl'>{ModalContent.duration.type}</span>
                        </div>
                        <div className='flex flex-col justify-start gap-2 mb-8 items-start'>
                            <h3 className='font-extrabold text-4xl text-start'>{ModalContent.title}</h3>
                            <h4 className='text-green-400 text-2xl font-extrabold'>{ModalContent.subTitle}</h4>
                            <p className='text-start text-base'>{ModalContent.description}</p>
                        </div>
                    </div>
                </div>
                <Link className='text-start w-full flex items-center text-xl justify-center gap-2 mt-4 text-white hover:text-green-400 cursor-pointer' href={ModalContent.address} >
                    <span>More details</span>
                    <ArrowRightIcon width={20} />
                </Link>
            </div>
        </div>
    );
};


function PopupContent({ closeModal }) {
    return (
        <div className={'flex fixed left-0 top-0 w-full h-full z-50 overflow-auto bg-black bg-opacity-60 justify-center items-center'}>
            <div className='bg-[#fefefe] p-2 md:p-5 border border-gray-500 w-full md:w-4/5 max-w-screen-md text-center'>
                <span className={'text-slate-500 float-right text-3xl font-bold hover:text-black focus:text-black hover:cursor-pointer focus:cursor-pointer'} onClick={closeModal}>&times;</span>
                {/* <h2 className="font-bold text-2xl">Apply for 5 week Summer Code Camp</h2> */}
                <img src="/Summer-camp-banner.jpg" className='w-full' alt="" srcset="" />
                <Link
                    className='text-start w-full text-sm flex justify-center gap-4 mt-4 hover:text-blue-600 cursor-pointer'
                    href="/"
                >
                    More details
                    <ArrowRightIcon width={20} />
                </Link>
            </div>
        </div>
    );
};