import React from "react";
import TeamCard from "../../components/sections/ourteam/TeamCard";
import DefaultPageBanner from "../../components/DefaultPageBanner";
import OurTeamPageFakes from "../../utils/ourTeamPageFakes";
import ReusableSection from "../../components/ReusableSection";

function Page() {
  return (
    <>
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
