import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";
import AboutSection from "../../Sections/About/About";
import OurServices from "../../Sections/OurServices/OurServices";
import Package from "../../Sections/Package/Package";
import WorksSection from "../../Sections/Works/Works";
import Note from "../../Sections/Note/Note";
import Blog from "../../Sections/Blog/Blog";
import Opinion from "../../Sections/Opinion/Opinion";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <HomeSection/>
            <AboutSection />
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