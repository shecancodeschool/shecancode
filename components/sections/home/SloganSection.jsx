const SloganSection = ({ slogansData }) => {
  return (
    <>
      <div className='w-full  bg-slog text-black py-10'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-evenly gap-16 items-center px-8'>
          {slogansData && slogansData.map((slogan, index) => (
            <div key={index} className='flex flex-col xs:flex-row justify-center items-center gap-4'>
              <div className='bg-btn1 p-3 rounded-full'>
                <img src={slogan.icon} alt={slogan.title} />
              </div>
              <p className='text-lg md:text-2xl text-black/65'>{slogan.title}</p>
            </div>))}
        </div>
      </div>
    </>
  )
}

export default SloganSection