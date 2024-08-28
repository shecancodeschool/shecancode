import Image from 'next/image';

function ReviewComp({userAvatar,name,title,text}) {
    return (
        <>

            <div className="bg-sky-200 rounded-lg shadow-lg w-[400px] p-12" id="content">
                <div className="flex items-center mb-4">
                    <Image src={userAvatar} alt={name} width={50} height={50} className="w-12 h-12 rounded-full mr-4" />
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
