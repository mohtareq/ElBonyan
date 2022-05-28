import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";
import AboutSection from "../../Sections/About/About";
import OurServices from "../../Sections/OurServices/OurServices";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <HomeSection/>
            <AboutSection />
            <OurServices />
        </HomeContainer>
    );
}

export default Home;