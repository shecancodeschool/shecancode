import DefaultPageBanner from "../../../components/DefaultPageBanner";
import BlogsPageData from "../../../utils/blogsPageFakes";
import ArticlesContainer from "@/components/sections/articles/ArticlesContainer";
import blogsAndCategoriesFakes from "@/utils/blogsAndCategoriesFakes";
import { openGraphImage } from '../../shared-metadata';

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

export default function Articles() {
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
      <ArticlesContainer blogsAndCategoriesFakes={blogsAndCategoriesFakes} />
    </>
  );
};