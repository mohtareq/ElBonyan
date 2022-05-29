import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";
import AboutSection from "../../Sections/About/About";
import OurServices from "../../Sections/OurServices/OurServices";
import Package from "../../Sections/Package/Package";
import WorksSection from "../../Sections/Works/Works";
import Note from "../../Sections/Note/Note";

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
        </HomeContainer>
    );
}

export default Home;