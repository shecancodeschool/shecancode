import JobDescriptionPageBanner from '../../_components/sections/careers/JobDescriptionPageBanner';
import JobDescriptionContainter from '../../_components/sections/careers/JobDescriptionContainter';
import { getArticleById } from '@/app/(dashboard-pages)/dashboard/_actions/articlesActions';

const page = async ({ params }) => {
  const { id } = params;
  const response = await getArticleById(id);
  const job = JSON.parse(response);
  
  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <JobDescriptionContainter job={job} />
    </>
  )
}

export default page;