import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../../Sections/OtherSections/HomeSections/HomeSection/HomeSection";
import AboutSection from "../../../Sections/OtherSections/HomeSections/Blog/Blog";
import OurServices from "../../../Sections/OtherSections/HomeSections/OurServices/OurServices";
import Package from "../../../Sections/OtherSections/HomeSections/Package/Package";
import WorksSection from "../../../Sections/OtherSections/HomeSections/Works/Works";
import Note from "../../../Sections/OtherSections/HomeSections/Note/Note";
import Blog from "../../../Sections/OtherSections/HomeSections/Blog/Blog";
import Opinion from "../../../Sections/OtherSections/HomeSections/Opinion/Opinion";
import YouTube from "../../../Sections/OtherSections/HomeSections/Youtube/Youtube";

const Home = () => {

    return(
        <HomeContainer>
            <HomeSection/>
            <AboutSection />
            <YouTube />
            <OurServices />
            <Package />
            <WorksSection />
            <Note />
            <Blog />
            <Opinion />
        </HomeContainer>
    );
}

export default Home;