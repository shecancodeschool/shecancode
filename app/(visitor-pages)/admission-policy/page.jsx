import { getAdmissionPolicy } from '@/app/(dashboard-pages)/dashboard/_actions/articlesActions';
import { openGraphImage } from "../../shared-metadata";
import DefaultPageBanner from '../_components/DefaultPageBanner';
import AdmissionPolicyInformationSection from '../_components/sections/admission-policy/AdmissionPolicyInformationSection';

export const metadata = {
  title: 'Admission Policy',
  description: "How we select and onboard new trainees at SheCanCODE.",
  keywords: "SheCanCODE, Admission Policy, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Admission Policy',
    description: "How we select and onboard new trainees at SheCanCODE.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancode.vercel.app/admission-policy',
  '@type': 'Admission Policy',
  name: 'Admission policy for SheCanCODE Bootcamp',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'How we select and onboard new trainees at SheCanCODE.',
}

export default async function page() {
  const response = await getAdmissionPolicy();
  const admissionPolicy = JSON.parse(response);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage={admissionPolicy.image}
        title={admissionPolicy.title}
        description={`Last updated: ${new Date(admissionPolicy.updatedAt).toDateString()}`}
      />
      <AdmissionPolicyInformationSection AdmissionPolicyPageData={admissionPolicy} />
    </>
  )
}