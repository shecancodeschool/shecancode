import blogsAndCategoriesFakes from "../../../utils/blogsAndCategoriesFakes";
import Image from "next/image";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const page = async ({ params }) => {
  const getBlog = async (params) => {
    const blog = blogsAndCategoriesFakes.blogs.find((blog) => blog.slug === params.slug);
    return blog;
  }
  const blog = await getBlog(params);
  
  const recentBlogs = [];
  for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
    if (index <= 5) {
      recentBlogs.push(blogsAndCategoriesFakes.blogs[index]);
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
      <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${blog.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.3s ease-in-out', willChange: 'background-image' }}>
        <div className={`flex flex-col items-start space-y-12 justify-center text-white w-full max-w-screen-xl`}>
          <div className="px-4 py-2 bg-white text-black">
            {blog.categories && blog.categories.map((category, index) => {
              if (index > 0) {
                return (
                  <span key={index} className="text-black">, {category}</span>
                )
              }

              return (
                <span key={index} className="text-black">{category}</span>
              )
            })}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">{blog.title || ''}</h1>
          <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
            {blog.description}
          </p>
          <div className="flex justify-start gap-4 items-center">
            <FaCircleUser className="text-4xl" />
            <div className="text-base">
              <p>By {blog.author}</p>
              <p>Published on {new Date(blog.publicationDate).toDateString()}</p>
            </div>
          </div>
          <Link href={`/articles/${blog.slug}/#content`} className="bg-[#317ACC] py-3 px-6 text-white rounded-md hover:bg-[#296494]">
            Read More
          </Link>
        </div>
      </div>
      <section id="content" className={`flex items-center justify-center mx-auto w-full px-4 md:px-12 py-20 md:pb-24 overflow-hidden`}>
        <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
          <div className="flex justify-between flex-wrap w-full">
            <div className="flex space-x-4 mb-8 flex-col w-full lg:w-[70%] text-black text-base md:text-xl">
              <Image src={blog.coverImage} alt={blog.title} width={900} height={500} />
              <p className="my-4">{blog.description}</p>
              <p>{blog.content}</p>
            </div>
            <div className="flex flex-col items-start w-full md:w-[28%] justify-start gap-8 text-black">
              <h3 className="text-3xl font-extrabold">Recent blogs</h3>
              <div className="flex flex-col">
                {recentBlogs && recentBlogs.map((item, index) => (
                  <Link href={`/articles/${item.slug}`} key={index} className="flex gap-4 py-4 hover:bg-slate-200 cursor-pointer">
                    <Image src={item.coverImage} alt={item.title} width={100} height={100} />
                    <h4 className="w-[70%] font-bold">{item.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
