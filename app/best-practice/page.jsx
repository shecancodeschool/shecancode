import ReusablePageStructure from "../../components/ReusablePageStructure";
import DefaultPageBanner from "../../components/DefaultPageBanner";
import ReusableSection from "../../components/ReusableSection";
import PageTitle from "../../components/PageTitle";

const page = () => {
    const bannerData = {
        title: "The leading channel to get more women in tech.",
        backgroundImage: "https://shecancode-website-dev.vercel.app/banner_img.png",
        description: "Join our community of more than 800 successful women in tech today.",
        hasButton: {
            label: "SEE AVAILABLE COURSES",
            url: "#"
        }
    };

    const sectionTitle = "More about SheCanCODE";

    return (
        <ReusablePageStructure>
            <DefaultPageBanner
                backgroundImage={bannerData.backgroundImage}
                title={bannerData.title}
                description={bannerData.description}
                hasButton={bannerData.hasButton}
            />
            <PageTitle orientation={"center"} title={sectionTitle} />
            <ReusableSection>
                <div className="w-full flex">
                    <div className="text-black">
                        <h3>Hello World</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet qui ducimus iste dolor nam distinctio nisi aspernatur, vitae repellat architecto eligendi inventore repudiandae cupiditate incidunt officia optio aut iusto?</p>
                    </div>
                    <div className="text-black">
                        <h3>Hello Bro</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet qui ducimus iste dolor nam distinctio nisi aspernatur, vitae repellat architecto eligendi inventore repudiandae cupiditate incidunt officia optio aut iusto?</p>
                    </div>
                </div>
            </ReusableSection>
        </ReusablePageStructure>
    )
}

export default page
