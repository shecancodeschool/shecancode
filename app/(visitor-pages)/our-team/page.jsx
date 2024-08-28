import TeamCard from "../_components/sections/ourteam/TeamCard";
import DefaultPageBanner from "../_components/DefaultPageBanner";
import OurTeamPageFakes from "../../../utils/ourTeamPageFakes";
import ReusableSection from "../_components/ReusableSection";
import { openGraphImage } from "../../shared-metadata";

export const metadata = {
  title: 'Our team',
  description: "The team at SheCanCODE Bootcamp.",
  keywords: "SheCanCODE, Team, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Our team',
    description: "The team at SheCanCODE Bootcamp.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancode.vercel.app/our-team',
  '@type': '',
  name: 'Our team',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'The team at SheCanCODE Bootcamp.',
}
function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage={OurTeamPageFakes.backgroundImage}
        title={OurTeamPageFakes.title}
        description={OurTeamPageFakes.titleDescription}
        hasButton={false}
      />
      {/* <PageTitle
        orientation={"center"} 
        title={OurTeamPageFakes.subTitle}
      /> */}
      <ReusableSection>
        <div className="flex justify-evenly flex-wrap w-full">
          {OurTeamPageFakes.teamMembers && OurTeamPageFakes.teamMembers.map((person, index) => (
            <TeamCard
              key={index}
              teamMember={person}
            />
          ))}
        </div>
      </ReusableSection>
    </>
  );
}

export default Page;
