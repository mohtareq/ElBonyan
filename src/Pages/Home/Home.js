import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection/HomeSection";
import AboutSection from "../../Sections/HomeSections/About/About";
import OurServices from "../../Sections/HomeSections/OurServices/OurServices";
import Package from "../../Sections/HomeSections/Package/Package";
import WorksSection from "../../Sections/HomeSections/Works/Works";
import Note from "../../Sections/HomeSections/Note/Note";
import Blog from "../../Sections/HomeSections/Blog/Blog";
import Opinion from "../../Sections/HomeSections/Opinion/Opinion";
import YouTube from "../../Sections/HomeSections/Youtube/Youtube";

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