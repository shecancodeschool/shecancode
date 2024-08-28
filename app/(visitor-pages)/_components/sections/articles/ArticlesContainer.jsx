"use client"

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReusableSection from "../../ReusableSection";
import BlogPostContainer from "./BlogPostContainer";

export default function ArticlesContainer({ blogsAndCategoriesFakes }) {
    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(blogsAndCategoriesFakes.blogCategories);

        let blogs = [];
        for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
            if (index < 9) {
                blogs.push(blogsAndCategoriesFakes.blogs[index]);
            }
        }
        setBlogPosts(blogs);
    }, [blogsAndCategoriesFakes.blogCategories, blogsAndCategoriesFakes.blogs])

    // Function to fetch more articles 
    const handleAddMoreArticles = (limit) => {
        let blogs = [];
        for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
            if (index < limit) {
                blogs.push(blogsAndCategoriesFakes.blogs[index]);
            }
        }
        setBlogPosts(blogs);
    };

    // Function to filter blog posts based on selected category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        let blogs = [];
        if (category !== "All") {
            for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
                if (index < 6 && blogsAndCategoriesFakes.blogs[index].categories[0] === category) {
                    blogs.push(blogsAndCategoriesFakes.blogs[index]);
                } else if (index < 6 && blogsAndCategoriesFakes.blogs[index].categories[1] === category) {
                    blogs.push(blogsAndCategoriesFakes.blogs[index]);
                } else if (index < 6 && blogsAndCategoriesFakes.blogs[index].categories[2] === category) {
                    blogs.push(blogsAndCategoriesFakes.blogs[index]);
                }
                setBlogPosts(blogs);
            }
        } else {
            for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
                if (index < 9) {
                    blogs.push(blogsAndCategoriesFakes.blogs[index]);
                }
                setBlogPosts(blogs);
            }
        }
    };

    return (
        <>
            {/* Categories  */}
            <div className="flex items-center justify-center mx-auto w-full px-4 md:px-12 py-10 md:pt-10 md:pb-12 overflow-hidden">
                <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
                    <div className="flex w-full pt-0 md:pt-10 flex-col gap-2">
                        <h3 className="section-sub-title">Categories</h3>
                        <div className="flex justify-start items-center flex-wrap gap-2">
                            <button
                                onClick={() => handleCategoryChange("All")}
                                className={`${selectedCategory === "All" ? "bg-sky-700" : "bg-sky-500"} hover:bg-sky-700 px-[20px] py-[7px] font-bold text-base text-white`}
                            >
                                All
                            </button>
                            {categories &&
                                categories.map((blogCategory, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategoryChange(blogCategory)}
                                        className={`${selectedCategory === blogCategory ? "bg-sky-700" : "bg-sky-500"} hover:bg-sky-700 px-[20px] py-[7px] font-bold text-base text-white`}
                                    >
                                        {blogCategory}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <ReusableSection background={"#e6f2ff"}>
                <div className="grid grid-cols-1 gap-4 md:gap-8 w-full sm:grid-cols-2 md:grid-cols-3 items-center justify-center md:flex-row md:justify-start">
                    {blogPosts && blogPosts.map((blog, index) => (
                        <BlogPostContainer key={index} blog={blog} />
                    ))}
                </div>
                <button onClick={() => handleAddMoreArticles(blogPosts.length + 6)} className="text-black flex gap-2 items-center justify-center hover:bg-sky-200 hover:text-sky-600 py-1 px-2 rounded-md">
                    <span>Show More</span>
                    <IoIosArrowDown />
                </button>
            </ReusableSection>
        </>
    )
}