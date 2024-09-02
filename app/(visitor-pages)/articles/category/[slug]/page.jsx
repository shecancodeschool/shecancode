import { getCategories } from "@/app/(dashboard-pages)/dashboard/_actions/blogCategoryActions";
import {  getArticlesByCategory } from "@/app/(dashboard-pages)/dashboard/_actions/articlesActions";
import { openGraphImage } from "@/app/shared-metadata";
import DefaultPageBanner from "@/app/(visitor-pages)/_components/DefaultPageBanner";
import ArticlesContainer from "@/app/(visitor-pages)/_components/sections/articles/ArticlesContainer";
import BlogsPageData from "@/utils/blogsPageFakes";

export const metadata = {
    title: 'Blog',
    description: "What is new in SheCanCode? Updates and news from SheCanCode.",
    keywords: "SheCanCODE, Articles, Blogs, SheCanCode Articles, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
    openGraph: {
        title: 'Blog',
        description: "What is new in SheCanCode? Updates and news from SheCanCode.",
        ...openGraphImage,
    },
};

const jsonLd = {
    '@context': 'https://shecancode.vercel.app/articles',
    '@type': 'Blog',
    name: 'Updates and Articles',
    image: 'https://shecancode.vercel.app/F8.jpeg',
    description: 'What is new in SheCanCode? Updates and news from SheCanCode.',
}

export default async function page({ params }) {
    const { slug } = params;
    
    const allCategories = await getCategories();
    const categories = JSON.parse(allCategories);

    const allBlogs = await getArticlesByCategory(slug);
    const blogs = JSON.parse(allBlogs);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DefaultPageBanner
                backgroundImage={BlogsPageData.backgroundImage}
                title={BlogsPageData.title}
                description={BlogsPageData.titleDescription}
                hasButton={false}
            />
            <ArticlesContainer
                categories={categories}
                blogs={blogs}
            />
        </>
    );
};