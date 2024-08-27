import HistoricalBackground from '@/components/sections/about-us/HistoricalBackground';
import VisionMission from '@/components/sections/about-us/VisionMission';
import CoreValues from '@/components/sections/about-us/CoreValues';
import AboutPageFakes from "@/utils/aboutPageFakes";
import DefaultPageBanner from '@/components/DefaultPageBanner';
import PageTitle from '@/components/PageTitle';
import { openGraphImage } from '../../shared-metadata';

export const metadata = {
  title: 'About us',
  description: "Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.",
  keywords: "SheCanCODE, Courses, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'About us',
    description: "Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancode.vercel.app/about-us',
  '@type': 'About Us',
  name: 'About SheCanCODE Bootcamp',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.',
}

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage={AboutPageFakes.backgroundImage}
        title={AboutPageFakes.title}
        description={AboutPageFakes.titleDescription}
        hasButton={false}
      />
      <PageTitle
        orientation={"center"}
        title={AboutPageFakes.subTitle}
      />
      <HistoricalBackground
        historicalBackground={AboutPageFakes.historicalBackground}
      />
      <VisionMission
        vision={AboutPageFakes.vision}
        mission={AboutPageFakes.mission}
      />
      <CoreValues
        values={AboutPageFakes.values}
      />
    </>
  )
}

export default page