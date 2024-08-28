import DefaultPageBanner from "../_components/DefaultPageBanner";
import PageTitle from "../_components/PageTitle";
import ReusablePageStructure from "../_components/ReusablePageStructure";
import ReusableSection from "../_components/ReusableSection";

const page = () => {
    const bannerData = {
        title: "The leading channel to get more women in tech.",
        backgroundImage: "/scc32.jpeg",
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