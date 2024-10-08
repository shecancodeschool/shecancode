import AboutPageFakes from "@/utils/aboutPageFakes";
import { openGraphImage } from '../../shared-metadata';
import DefaultPageBanner from "../_components/DefaultPageBanner";
import PageTitle from "../_components/PageTitle";
import HistoricalBackground from "../_components/sections/about-us/HistoricalBackground";
import VisionMission from "../_components/sections/about-us/VisionMission";
import CoreValues from "../_components/sections/about-us/CoreValues";

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
  '@context': 'https://www.shecancodeschool.org/about-us',
  '@type': 'About Us',
  name: 'About SheCanCODE Bootcamp',
  image: 'https://www.shecancodeschool.org/F8.jpeg',
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