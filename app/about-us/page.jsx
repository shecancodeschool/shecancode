import HistoricalBackground from '@/components/sections/about-us/HistoricalBackground';
import VisionMission from '@/components/sections/about-us/VisionMission';
import CoreValues from '@/components/sections/about-us/CoreValues';
import AboutPageFakes from "@/utils/aboutPageFakes";
import DefaultPageBanner from '@/components/DefaultPageBanner';
import PageTitle from '@/components/PageTitle';

const page = () => {
  return (
    <>
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