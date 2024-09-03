"use client"

import ReusableSection from "../../ReusableSection";
import BlogPostContainer from "./BlogPostContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ArticlesContainer({ categories: blogCategories,blogs: articles }) {
    const pathName = usePathname();

    return (
        <>
            {/* Categories  */}
            <div className="flex items-center justify-center mx-auto w-full px-4 md:px-12 py-10 md:pt-10 md:pb-12 overflow-hidden">
                <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
                    <div className="flex w-full pt-0 md:pt-10 flex-col gap-2">
                        <h3 className="section-sub-title">Categories</h3>
                        <div className="flex justify-start items-center flex-wrap gap-2">
                            <Link
                                href={"/articles"}
                                className={`${pathName === "/articles" ? "bg-sky-700" : "bg-sky-500"} hover:bg-sky-700 px-[20px] py-[7px] font-bold text-base text-white`}
                            >
                                All
                            </Link>
                            {
                                blogCategories?.map((blogCategory, index) => (
                                    <Link
                                        key={index}
                                        href={`/articles/category/${blogCategory.slug}`}
                                        className={`${pathName === `/articles/category/${blogCategory.slug}` ? "bg-sky-700" : "bg-sky-500"} hover:bg-sky-700 px-[20px] py-[7px] font-bold text-base text-white`}
                                    >
                                        {blogCategory.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <ReusableSection background={"#e6f2ff"}>
                <div className="grid grid-cols-1 gap-4 md:gap-8 w-full sm:grid-cols-2 md:grid-cols-3 items-center justify-center md:flex-row md:justify-start">
                    {articles?.map((blog, index) => (
                        <BlogPostContainer key={index} blog={blog} />
                    ))}
                </div>
            </ReusableSection>
        </>
    )
}