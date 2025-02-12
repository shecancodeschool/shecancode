import AboutPageFakes from "@/utils/aboutPageFakes";
import { openGraphImage } from '../../shared-metadata';
import DefaultPageBanner from "../_components/DefaultPageBanner";
import PageTitle from "../_components/PageTitle";
import HistoricalBackground from "../_components/sections/about-us/HistoricalBackground";
import VisionMission from "../_components/sections/about-us/VisionMission";
import CoreValues from "../_components/sections/about-us/CoreValues";

export const metadata = {
  title: "About us",
  description: "Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.",
  keywords: "SheCanCODE, About SheCanCODE, About SheCanCode Bootcamp, SheCanCode Bootcamp, SheCanCode School, SheCanCODE Rwanda, Rwanda, Empowering Women, Training Bootcamps in Rwanda, Coding bootcamps in Rwanda, Coding bootcamp near me, IT Bootcamp in Rwanda, IT Bootcamp near me, Women in tech bootcamp in Rwanda, Women in tech bootcamp near me, Girls only bootcamp, girls only coding bootcamp near me, Coding Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda",
  openGraph: {
    title: "About us",
    description: "Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.",
    ...openGraphImage,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "About us",
  "url": "https://www.shecancodeschool.org/about-us",
  "description": "Learn more about SheCanCODE Bootcamp. Historical Background, Mission, Vision and Values of SheCanCODE.",
  "image": "/F8.jpeg",
  "author": {
    "@type": "Organization",
    "name": "SheCanCODE Bootcamp",
    "url": "https://www.shecancodeschool.org",
    "image": "/F8.jpeg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.shecancodeschool.org/about-us`
  }
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