import JobDescriptionPageBanner from '../../_components/sections/careers/JobDescriptionPageBanner';
import JobDescriptionContainter from '../../_components/sections/careers/JobDescriptionContainter';
import { getArticleBySlug } from '@/app/(dashboard-pages)/dashboard/_actions/articlesActions';

var metadata = {};

const page = async ({ params }) => {
  

  const { slug } = params;
  const response = await getArticleBySlug(slug);
  const job = JSON.parse(response);

  metadata = {
    title: `${job.title}`,
    description: `${job.description}`,
    keywords: "SheCanCODE, Career, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
    openGraph: {
      title: `${job.title}`,
      description: `${job.description}`,
      ...{ images: [job.image] },
    },
  };

  const jsonLd = {
    '@context': `https://www.shecancodeschool.org/careers/${job.id}`,
    '@type': 'Job',
    name: `${job.title}`,
    image: `${job.image}`,
    description: `${job.description}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobDescriptionPageBanner job={job} />
      <JobDescriptionContainter job={job} />
    </>
  )
}

export var metadata = metadata;

export default page;