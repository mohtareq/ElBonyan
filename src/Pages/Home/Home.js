import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import AboutSection from "../../Sections/About/About";
import OurServices from "../../Sections/OurServices/OurServices";
import Package from "../../Sections/Package/Package";
import WorksSection from "../../Sections/Works/Works";
import Note from "../../Sections/Note/Note";
import Blog from "../../Sections/Blog/Blog";
import Opinion from "../../Sections/Opinion/Opinion";
import Footer from "../../Sections/Footer/Footer";
import YouTube from "../../Sections/Youtube/Youtube";

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
            <Footer />
        </HomeContainer>
    );
}

export default Home;