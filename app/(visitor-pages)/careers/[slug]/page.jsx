import JobDescriptionPageBanner from '../../_components/sections/careers/JobDescriptionPageBanner';
import JobDescriptionContainter from '../../_components/sections/careers/JobDescriptionContainter';
import { getArticleBySlug } from '@/app/(dashboard-pages)/dashboard/_actions/articlesActions';

const page = async (params) => {
  const { slug } = params;
  const response = await getArticleBySlug(slug);
  const job = JSON.parse(response);

  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <JobDescriptionContainter job={job} />
    </>
  )
}

export default page;