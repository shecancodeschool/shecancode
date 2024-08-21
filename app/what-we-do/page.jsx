import DefaultPageBanner from "../../components/DefaultPageBanner";
import WhatWeDoPageFakes from "../../utils/whatWeDoFakes";
import PageTitle from "../../components/PageTitle";
import ReusableSection from "../../components/ReusableSection";
import Image from "next/image";

export default function page() {
  return (
    <>
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
              orientation={"left-right"}
              activity={WhatWeDoPageFakes.activities[index]}
            />
          )
        }

        return (
          <Activity
            key={index + 2}
            orientation={"right-left"}
            activity={WhatWeDoPageFakes.activities[index]}
          />
        )

      })}
    </>
  );
}


const Activity = ({ orientation, activity }) => {
  const { title, description, items, photo } = activity;
  
  if (orientation === "left-right") {
    return (
      <ReusableSection isTopSection>
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
    <ReusableSection isTopSection>
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