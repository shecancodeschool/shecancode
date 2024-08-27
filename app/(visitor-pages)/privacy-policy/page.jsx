import DefaultPageBanner from '../../../components/DefaultPageBanner';
import PrivacyPolicyPageData from '../../../utils/privacyPolicyFakes';
import { openGraphImage } from "../../shared-metadata";
import PrivacyPolicyInformationSection from '@/components/sections/privacyPolicy/PrivacyPolicyInformationSection';

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

export default function PrivacyPolicy() {
  return (
    <>
      <DefaultPageBanner
        backgroundImage={PrivacyPolicyPageData.backgroundImage}
        title={PrivacyPolicyPageData.title}
        description={`Last updated: ${new Date(PrivacyPolicyPageData.updatedAt).toDateString()}`}
      />
      <PrivacyPolicyInformationSection PrivacyPolicyPageData={PrivacyPolicyPageData}/>
    </>
  )
}