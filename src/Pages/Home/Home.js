import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";
import AboutSection from "../../Sections/About/About";
import OurServices from "../../Sections/OurServices/OurServices";
import Package from "../../Sections/Package/Package";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <HomeSection/>
            <AboutSection />
            <OurServices />
            <Package />
        </HomeContainer>
    );
}

export default Home;