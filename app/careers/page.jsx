import DefaultPageBanner from "../../components/DefaultPageBanner";
import CareerPageFakes from "../../utils/careerPageFakes";
import PageTitle from "../../components/PageTitle";
import ReusableSection from "../../components/ReusableSection";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Jobs from "../../utils/jobsFakes";

const cardColors = [
  "bg-sky-100",
  "bg-sky-300",
  "bg-sky-500",
  "bg-sky-700"
]

function Page() {
  const { backgroundImage, title, titleDescription, subTitle, processOfJoiningTeam, reasonsToJoinOurTeam } = CareerPageFakes;
  return (
    <>
      <DefaultPageBanner
        backgroundImage={backgroundImage}
        title={title}
        description={titleDescription}
        hasButton={false}
      />
      <PageTitle
        orientation={"center"}
        title={subTitle}
      />
      <p className="text-center text-gray-800 w-full p-5 sm:w-2/3 md:w-1/2 text-xl mx-auto max-w-screen-lg">{CareerPageFakes.processOfJoiningTeam.intro}</p>
      <ReusableSection isTopSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 w-full">
          {processOfJoiningTeam.processes && processOfJoiningTeam.processes.map((process, index) => (
            <div key={index} className={`px-4 ${cardColors[index]} space-y-6 py-6 md:py-12`}>
              <p className={`text-xl ${index >= 2 ? "text-white" : "text-gray-700"} font-bold`}>{`0${(index + 1).toString()}`}</p>
              <p className={`${index >= 2 ? "text-blue-100" : "text-blue-600"} text-2xl`}>{process.title}</p>
              <p className={`${index >= 2 ? "text-white" : "text-gray-700"} text-base`}>{process.description}</p>
            </div>
          ))}
        </div>
      </ReusableSection>
      <div className={`flex items-center justify-center mx-auto w-full px-4 md:px-12 py-4 overflow-hidden`}>
        <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <h3 className="text-2xl mt-6 md:mt-0 md:text-3xl font-bold text-[#317ACC]">{reasonsToJoinOurTeam.title}</h3>
            <p className="text-md text-gray-700 w-full sm:w-4/5 md:w-3/4 text-base md:text-xl text-center">{reasonsToJoinOurTeam.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 w-full">
              {reasonsToJoinOurTeam.reasonsToJoin && reasonsToJoinOurTeam.reasonsToJoin.map((reason, index) => (
                <div key={index} className={`px-4 space-y-4 py-6`}>
                  <Image src={`/${reason.icon}`} alt="" width={40} height={40} />
                  <p className="text-2xl text-sky-600">{reason.title}</p>
                  <p className="text-base text-gray-700">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ReusableSection isTopSection background={"#e6f2ff"}>
        <div id="jobs" className="flex pt-10 md:pt-24 flex-col gap-6 items-center mb-6 md:mb-12 justify-center w-full">
          <h3 className="text-2xl mb-3 md:text-3xl text-left w-full font-bold text-[#317ACC]">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
            {Jobs && Jobs.map((job, index) => (
              <Link key={index} href={`/careers/${job._id}`} className="bg-sky-950 p-6 cursor-pointer rounded-md flex items-center justify-between gap-2">
                <p className="text-xl md:text-xl">{job.title}</p>
                <div className="bg-white p-2 md:p-4 rounded-full w-fit">
                  <FaArrowRight className="text-black text-2xl md:text-3xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ReusableSection>
    </>
  );
}

export default Page;
