import Link from 'next/link';
import { numberToMonth } from '../../../../../utils/NumberFunctions';
import { textLimiter } from '../../../../../utils/textLimiter';

const CourseCard = ({ course }) => {
  const { title, subTitle, duration, durationType, startDate, fee, coverImage, slug, isOpen } = course;

  return (
    <div className='flex flex-col sm:w-[48%] md:w-[22%] shadow-md mb-10 rounded-md bg-white'>
      <div className='h-36 w-full rounded-t-md relative'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.3s ease-in-out',
          willChange: 'background-image',
        }}
      >
        {isOpen === "Yes" && <div className='z-50 bg-orange-500 w-fit px-3 py-1 text-sm rounded-tl-md'>{numberToMonth(new Date(startDate).getMonth())} Intake Now Open</div>}
        {isOpen === "No" && <div className='z-50 bg-blue-500 w-fit px-3 py-1 rounded-tl-md'>Coming soon</div>}
      </div>
      <div className='flex flex-col py-6 px-4 text-black justify-between min-h-64 gap-2 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl text-sky-700 font-bold'>{title}</h3>
          <p className='text-sm'>{textLimiter(subTitle, 100)}</p>
        </div>
        <div className='flex justify-between items-center'>
          <span>{duration} {durationType}</span>
          <span className='ml-4 font-extrabold text-sky-600'>{fee !== "Free" ? "Paid" : "Free"}</span>
        </div>
        <div className='flex flex-col gap-2'>
          {isOpen === "Yes" && <Link href={`/courses/${slug}`} className='w-full text-center bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-2xl p-1'>Enroll Now</Link>}
          {/* <Link href={`/courses/${slug}`} className='w-full text-sky-600 text-center hover:text-sky-900'>Read more</Link> */}
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
