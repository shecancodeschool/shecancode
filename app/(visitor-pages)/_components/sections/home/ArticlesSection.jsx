import { textLimiter } from '../../../../../utils/textLimiter';
import Image from 'next/image';
import Link from 'next/link';
import ReusableSection from '../../ReusableSection';
import PageTitle from '../../PageTitle';

export default function ArticlesSection({ articles }) {
    return (
        <ReusableSection isTopSection background={"white"}>
            <div className='flex flex-col w-full mx-auto text-black gap-8 md:gap-0 pb-16'>
                <PageTitle orientation={'center'} title={'Trending Stories'} />
                <div className='flex w-full flex-wrap justify-between'>
                    <div className='flex flex-col w-full md:w-[48%] mb-8 md:mb-0'>
                        <Link
                            href={`/articles/${articles[0].slug}`}
                            className='flex flex-col w-full h-96 rounded-lg justify-end'
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${articles[0].coverImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'background-image 0.3s ease-in-out',
                                willChange: 'background-image'
                            }}
                        >
                            <div id="article-description" className='flex flex-col gap-2 p-4 md:p-8 text-white h-3/4 justify-end'>
                                <h3 className='text-2xl font-bold'>{articles[0].title}</h3>
                                <p>{textLimiter(articles[1].description, 150)}</p>
                                <span className='text-orange-400 text-sm'>Published on {new Date(articles[1].publishedOn).toDateString()}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col w-full md:w-[48%] gap-6'>
                        {articles && articles.map((article, index) => {
                            if (index === 0) {
                                return null;
                            }
                            return (
                                <Link key={index} href={`/articles/${article.slug}`} className='flex w-full rounded-lg gap-4 justify-between items-start'>
                                    <div className='flex justify-between items-center w-[22%]'>
                                        <Image src={article.coverImage} alt={article.title} width={10} height={10} className='rounded-lg' layout='responsive' />
                                    </div>
                                    <div className='flex flex-col gap-1 w-[75%] text-black justify-end'>
                                        <h4 className='text-lg font-bold'>{article.title}</h4>
                                        <p>{textLimiter(article.description, 120)}</p>
                                        <span className='text-orange-400 text-sm'>Published on {new Date(article.publishedOn).toDateString()}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </ReusableSection>
    )
}