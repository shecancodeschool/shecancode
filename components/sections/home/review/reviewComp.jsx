import React from 'react'

function ReviewComp({imgSrc,name,title,text}) {
    return (
        <>

            <div className="bg-[#E2ECF2] rounded-lg shadow-lg w-[400px] p-12">
                <div className="flex items-center mb-4">
                    <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <p className="text-blue-500">{title}</p>
                    </div>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default ReviewComp
