import BlogsPageData from "../../../utils/blogsPageFakes";
import { openGraphImage } from '../../shared-metadata';
import ArticlesContainer from "../_components/sections/articles/ArticlesContainer";
import DefaultPageBanner from "../_components/DefaultPageBanner";
import { getCategories } from "@/app/(dashboard-pages)/dashboard/_actions/blogCategoryActions";
import { getOnlyPublishedArticlesForBlog } from "@/app/(dashboard-pages)/dashboard/_actions/articlesActions";

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

export default async function page() {
  const allCategories = await getCategories();
  var categories = []
  var categoriesExcludingPolicies = [];

  if (typeof allCategories === "string") {
    categories = JSON.parse(allCategories);
    categories.forEach(element => {
      if (element.name !== "Policies") {
        categoriesExcludingPolicies.push(element);
      }
    });
  }

  const response = await getOnlyPublishedArticlesForBlog(false);
  var data = null;
  if (typeof response === "string") {
    data = JSON.parse(response);
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
        blogs={data?.articles}
      />
    </>
  );
};