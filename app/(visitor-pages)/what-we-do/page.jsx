import WhatWeDoPageFakes from "../../../utils/whatWeDoFakes";
import Image from "next/image";
import { openGraphImage } from "../../shared-metadata";
import DefaultPageBanner from "../_components/DefaultPageBanner";
import PageTitle from "../_components/PageTitle";
import ReusableSection from "../_components/ReusableSection";

export const metadata = {
  title: 'What We Do',
  description: "Activities, Outreach, and life at SheCanCODE Bootcamp. More about what SheCanCODE is involved into.",
  keywords: "SheCanCODE, Activities at SheCanCODE, What we do, Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'What We Do',
    description: "Activities, Outreach, and life at SheCanCODE Bootcamp. More about what SheCanCODE is involved into.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://www.shecancodeschool.org/what-we-do',
  '@type': 'What We Do',
  name: 'What We Do',
  image: 'https://www.shecancodeschool.org/F8.jpeg',
  description: 'Activities, Outreach, and life at SheCanCODE Bootcamp. More about what SheCanCODE is involved into.',
}

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage={WhatWeDoPageFakes.backgroundImage}
        title={WhatWeDoPageFakes.title}
        description={WhatWeDoPageFakes.titleDescription}
        hasButton={false}
      />
      <PageTitle
        orientation={"center"}
        title={WhatWeDoPageFakes.subTitle}
      />
      {WhatWeDoPageFakes.activities && WhatWeDoPageFakes.activities.map((activity, index) => {
        if ((index + 2) % 2 === 0) {
          return (
            <Activity
              key={index + 2}
              isTopSection={index === 0}
              orientation={"left-right"}
              activity={WhatWeDoPageFakes.activities[index]}
            />
          )
        }

        return (
          <Activity
            key={index + 2}
            isTopSection={index === 0}
            orientation={"right-left"}
            activity={WhatWeDoPageFakes.activities[index]}
          />
        )

      })}
    </>
  );
}


const Activity = ({ isTopSection, orientation, activity }) => {
  const { title, description, items, photo } = activity;

  if (orientation === "left-right") {
    return (
      <ReusableSection isTopSection={isTopSection}>
        <div className="flex justify-between flex-wrap-reverse">
          {/* Content  */}
          <div className="flex flex-col w-full md:w-[48%] mb-8 md:mb-0 mt-5 md:mt-0">
            <h3 className="section-sub-title">
              {title}
            </h3>
            <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
              {description}
            </p>
            <ul className="list-disc mt-4 list-inside font-light text-base font md:text-xl text-justify text-sky-950">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Photo  */}
          <div className={`flex flex-col w-full md:w-[48%]`}>
            <Image src={photo} alt={title} height={500} width={1000} />
          </div>
        </div>
      </ReusableSection>
    )
  }

  return (
    <ReusableSection background="white" isTopSection={isTopSection} >
      <div className="flex justify-between flex-wrap">
        {/* Photo  */}
        <div className={`flex flex-col w-full md:w-[48%]`}>
          <Image src={photo} alt={title} height={500} width={1000} />
        </div>

        {/* Content  */}
        <div className="flex flex-col w-full md:w-[48%] mb-8 md:mb-0 mt-5 md:mt-0">
          <h3 className="section-sub-title">
            {title}
          </h3>
          <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
            {description}
          </p>
          <ul className="list-disc mt-4 list-inside font-light text-base font md:text-xl text-justify text-sky-950">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </ReusableSection>
  )
}