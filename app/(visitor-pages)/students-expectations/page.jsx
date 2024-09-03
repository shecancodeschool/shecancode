import DefaultPageBanner from '../_components/DefaultPageBanner';
import LearnerExpectationsPageData from '../../../utils/learnerExpectationsFakes';
import StudentExpectationsInformationSection from '../_components/sections/studentExpectations/StudentExpectationsInformationSection';
import { openGraphImage } from "../../shared-metadata";

export const metadata = {
  title: 'Student Expectations',
  description: "What you should expect by joining SheCanCODE Bootcamp and what SheCanCODE expects from you as a trainee.",
  keywords: "SheCanCODE,Programs at SheCanCODE, SheCanCode Courses, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Student Expectations',
    description: "What you should expect by joining SheCanCODE Bootcamp and what SheCanCODE expects from you as a trainee.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancodeschool.org/students-expectations',
  '@type': 'Student Expectations',
  name: 'Student Expectations',
  image: 'https://shecancodeschool.org/F8.jpeg',
  description: 'What you should expect by joining SheCanCODE Bootcamp and what SheCanCODE expects from you as a trainee.',
}

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage={LearnerExpectationsPageData.backgroundImage}
        title={LearnerExpectationsPageData.title}
      />
      <StudentExpectationsInformationSection LearnerExpectationsPageData={LearnerExpectationsPageData} />
    </>
  )
}