import Link from "next/link";

export default function BlogPostContainer({ blog }) {
    const { coverImage, title, slug, description, categories, ...rest } = blog;
    return (
        <Link href={`/articles/${slug}`} className='flex flex-col w-full shadow-md mb-10 rounded-md cursor-pointer bg-white'>
            <div className='h-56 w-full rounded-t-md relative'
                style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 0.3s ease-in-out',
                    willChange: 'background-image',
                }}
            >
            </div>
            <div className='flex flex-col py-6 px-4 text-black justify-between min-h-60 gap-2 flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <div>
                        {
                            categories &&
                            categories.map((category, index) => {
                                if (index > 0) {
                                    return (
                                        <p className='text-sm text-orange-400 inline-block' key={index}>, {category}</p>
                                    )
                                }
                                return (
                                    <p className='text-sm text-orange-400 inline-block' key={index}>{category}</p>
                                )
                            })
                        }
                        <h3 className='text-xl text-sky-700 font-bold'>{title}</h3>
                    </div>
                    <p className='text-sm'>{description.length > 100 ? description.substring(0, 100) : description}</p>
                    <button type="button" className="text-sky-600 hover:text-sky-400 px-4 py-1 mt-2 rounded-full border-sky-600 hover:border-sky-400 border-2 w-fit">Read More</button>
                </div>
            </div>
        </Link>
    )
}