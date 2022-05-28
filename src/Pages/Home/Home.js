import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";
import AboutSection from "../../Sections/About/About";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <HomeSection/>
            <AboutSection />
        </HomeContainer>
    );
}

export default Home;