import { getPrivacyPolicy } from '@/app/(dashboard-pages)/dashboard/_actions/articlesActions';
import { openGraphImage } from "../../shared-metadata";
import DefaultPageBanner from '../_components/DefaultPageBanner';
import PrivacyPolicyInformationSection from '../_components/sections/privacyPolicy/PrivacyPolicyInformationSection';

export const metadata = {
  title: 'Privacy Policy',
  description: "SheCanCODE Bootcamp Privacy Policy.",
  keywords: "SheCanCODE, Privacy Policy, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Privacy Policy',
    description: "SheCanCODE Bootcamp Privacy Policy.",
    ...openGraphImage,
  },
}

export default async function PrivacyPolicy() {
  const response = await getPrivacyPolicy();
  const privacyPolicy = JSON.parse(response);

  return (
    <>
      <DefaultPageBanner
        backgroundImage={privacyPolicy.image}
        title={privacyPolicy.title}
        description={`Last updated: ${new Date(privacyPolicy.updatedAt).toDateString()}`}
      />
      <PrivacyPolicyInformationSection PrivacyPolicyPageData={privacyPolicy}/>
    </>
  )
}