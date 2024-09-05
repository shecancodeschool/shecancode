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
    '@context': 'https://shecancodeschool.org/articles',
    '@type': 'Blog',
    name: 'Updates and Articles',
    image: 'https://shecancodeschool.org/F8.jpeg',
    description: 'What is new in SheCanCode? Updates and news from SheCanCode.',
}

export default async function page({ params }) {
    const { slug } = params;
    var categories = [];
    var blogs = [];
    const allCategories = await getCategories();
    if (typeof allCategories === "string") {
        categories = JSON.parse(allCategories);
    }
    const categoriesExcludingPolicies = categories.filter(category => category.name !== "Policies");

    const allBlogs = await getArticlesByCategory(slug);
    if (typeof allBlogs === "string") {
        blogs = JSON.parse(allBlogs);
    }

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
                categories={categoriesExcludingPolicies}
                blogs={blogs}
            />
        </>
    );
};