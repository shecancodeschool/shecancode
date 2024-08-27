import ContactForm from '../../../components/sections/contact-us/ContactForm'
import DefaultPageBanner from '../../../components/DefaultPageBanner'
import PageTitle from '../../../components/PageTitle'
import { openGraphImage } from "../../shared-metadata";

export const metadata = {
  title: 'Contact Us',
  description: "Do you have a question or would like to visit our training center, or join our program, do not hesitate to contac us.",
  keywords: "SheCanCODE, Contact us, Bootcamp, Women in tech, Training bootcamp, IT, IT Bootcamp, Free bootcamp, Girls, Girls bootcamp in Rwanda, Igire Rwanda Organization",
  openGraph: {
    title: 'Contact Us',
    description: "Do you have a question or would like to visit our training center, or join our program, do not hesitate to contac us.",
    ...openGraphImage,
  },
};

const jsonLd = {
  '@context': 'https://shecancode.vercel.app/contact-us',
  '@type': 'Contact-us',
  name: 'Contact Us',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'Do you have a question or would like to visit our training center, or join our program, do not hesitate to contac us.',
}

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultPageBanner
        backgroundImage="/banner_img.png"
        title="Contact Us"
        description="Leave here your feedback and let’s us know what do you think about us"
      />
      <div>
        <PageTitle orientation={"center"} title={"Tell us what you need!"} />
        <ContactForm />
      </div>
    </>
  )
}