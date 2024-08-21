import Image from "next/image"

const SloganSection = ({ slogansData }) => {
  return (
    <>
      <div className='w-full  bg-slog text-black py-10'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-evenly gap-16 items-center px-8'>
          {slogansData && slogansData.map((slogan, index) => (
            <div key={index} className='flex flex-col xs:flex-row justify-center items-center gap-4'>
              <div className='bg-btn1 p-3 rounded-ful bg-sky-300 rounded-md'>
                <Image src={slogan.icon} width={40} height={40} alt={slogan.title} />
              </div>
              <p className='text-base md:text-xl'>{slogan.title}</p>
            </div>))}
        </div>
      </div>
    </>
  )
}

export default SloganSection