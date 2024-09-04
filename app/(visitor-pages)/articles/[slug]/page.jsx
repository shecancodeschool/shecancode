import { getArticleBySlug, getOnlyPublishedArticlesForBlog } from "@/app/(dashboard-pages)/dashboard/_actions/articlesActions";
import Image from "next/image";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import parse from 'html-react-parser';
import { FaArrowLeft } from "react-icons/fa";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "@/app/(dashboard-pages)/dashboard/loading";

const page = async ({ params }) => {
  const { slug } = params;
  var blog = null;
  var data = null;
  
  const fetchedBlog = await getArticleBySlug(slug);
  const response = await getOnlyPublishedArticlesForBlog(false, 10);

  if (typeof fetchedBlog === "string") {
    blog = JSON.parse(fetchedBlog);
  }
  const author = blog?.author;
  if (typeof response === "string") {
    data = JSON.parse(response);
  }

  const recentBlogs = [];
  for (let index = 0; index < data.articles.length; index++) {
    if (index <= 5) {
      recentBlogs.push(data.articles[index]);
    }
  }

  if (!blog) {
    return (
      <div>
        <h1>Blog not found</h1>
      </div>
    )
  }

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>

          <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${blog?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.3s ease-in-out', willChange: 'background-image' }}>
            <div className={`flex flex-col items-start space-y-8 justify-center text-white w-full max-w-screen-xl`}>
              <Link href={`/articles`} className="flex flex-row items-center justify-center gap-2">
                <span className="bg-transparent rounded-full border-2 border-white p-1"><FaArrowLeft className="text-white" /></span>
                <span className="text-base">Go back</span>
              </Link>
              <div className="px-4 py-2 bg-white text-black">
                <span className="text-black">{blog?.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">{blog?.title || ''}</h1>
              <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                {blog?.description}
              </p>
              <div className="flex justify-start gap-4 items-center">
                <FaCircleUser className="text-4xl" />
                <div className="text-base">
                  <p>By {author?.name}</p>
                  <p>Published on {new Date(blog?.updatedAt).toDateString()}</p>
                </div>
              </div>
              <Link href={`/articles/${blog?.slug}/#content`} className="bg-[#317ACC] py-3 px-6 text-white rounded-md hover:bg-[#296494]">
                Read More
              </Link>
            </div>
          </div>
          <section id="content" className={`flex items-center justify-center mx-auto w-full px-4 md:px-12 py-20 md:pb-24 overflow-hidden`}>
            <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
              <div className="flex justify-between flex-wrap w-full">
                <div className="blog-container flex space-x-4 mb-8 flex-col w-full lg:w-[70%] text-black text-base md:text-xl">
                  {blog?.image && <Image src={blog?.image} alt={blog?.title} width={900} height={500} className="mb-8" />}
                  <div className="section">
                    {parse(blog?.content)}
                  </div>
                </div>
                <div className="flex flex-col items-start w-full md:w-[28%] justify-start gap-8 text-black">
                  <h3 className="text-3xl font-extrabold">Recent stories</h3>
                  <div className="flex flex-col">
                    {recentBlogs && recentBlogs?.map((item, index) => (
                      <Link href={`/articles/${item.slug}`} key={index} className="flex gap-4 py-4 hover:bg-slate-200 cursor-pointer">
                        <Image src={item.image} alt={item.title} width={100} height={100} />
                        <h4 className="w-[70%] font-bold">{item.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default page;
