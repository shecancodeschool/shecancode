import { textLimiter } from '../../../../../utils/textLimiter';
import Image from 'next/image';
import Link from 'next/link';
import ReusableSection from '../../ReusableSection';
import PageTitle from '../../PageTitle';

export default function ArticlesSection({ featuredArticle, articles }) {
    return (
        <ReusableSection isTopSection background={"white"}>
            <div className='flex flex-col w-full mx-auto text-black gap-8 md:gap-0 pb-0'>
                <PageTitle orientation={'center'} title={'Trending Stories'} />
                <div className='flex w-full flex-wrap justify-between'>
                    <div className='flex flex-col w-full md:w-[48%] mb-8 md:mb-0'>
                        <Link
                            href={`/articles/${featuredArticle?.slug}`}
                            className='flex flex-col w-full h-96 rounded-lg justify-end'
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${featuredArticle?.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'background-image 0.3s ease-in-out',
                                willChange: 'background-image'
                            }}
                        >
                            <div id="article-description" className='flex flex-col gap-2 p-4 md:p-8 text-white h-3/4 justify-end'>
                                <h3 className='text-2xl font-bold'>{featuredArticle?.title}</h3>
                                <p>{textLimiter(featuredArticle?.description, 150)}</p>
                                <span className='text-orange-400 text-sm'>Published on {new Date(featuredArticle?.updatedAt).toDateString()}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col w-full md:w-[48%] gap-6'>
                        {articles?.map((article, index) => {
                            if (index === 0) {
                                return null;
                            }
                            return (
                                <Link key={index} href={`/articles/${article.slug}`} className='flex w-full rounded-lg gap-4 justify-between items-start'>
                                    <div className='flex justify-between rounded-md items-center w-[48%] md:w-[30%] lg:w-[22%] h-full' style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.3s ease-in-out',willChange: 'background-image', }}>
                                    </div>
                                    <div className='flex flex-col gap-1 w-[50%] md:w-[68%] lg:w-[76%] text-black justify-end'>
                                        <h4 className='text-lg font-bold'>{article.title}</h4>
                                        <p>{textLimiter(article.description, 120)}</p>
                                        <span className='text-orange-400 text-sm'>Published on {new Date(article.createdAt).toDateString()}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                <Link href="/articles" className="bg-[#317ACC] items-center mt-8 py-3 px-6 w-fit text-center text-white rounded-md hover:bg-[#296494]">
                    See More Articles
                </Link>
                </div>
            </div>
        </ReusableSection>
    )
}