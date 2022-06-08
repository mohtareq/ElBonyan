import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../HomeSections/HomeSection/HomeSection";
import AboutSection from "../../HomeSections/About/About";
import OurServices from "../../HomeSections/OurServices/OurServices";
import Package from "../../HomeSections/Package/Package";
import WorksSection from "../../HomeSections/Works/Works";
import Note from "../../HomeSections/Note/Note";
import Blog from "../../HomeSections/Blog/Blog";
import Opinion from "../../HomeSections/Opinion/Opinion";
import YouTube from "../../HomeSections/Youtube/Youtube";

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