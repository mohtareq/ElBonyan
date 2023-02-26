import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../../Sections/OtherSections/HomeSections/HomeSection/HomeSection";
import About from "../../../Sections/OtherSections/HomeSections/About/About";
import OurServices from "../../../Sections/OtherSections/HomeSections/OurServices/OurServices";
import Package from "../../../Sections/OtherSections/HomeSections/Package/Package";
import Blog from "../../../Sections/OtherSections/HomeSections/Blog/Blog";
import Opinion from "../../../Sections/OtherSections/HomeSections/Opinion/Opinion";

const Home = () => {

    return(
        <HomeContainer>
            <HomeSection/>
            <About />
            <OurServices />
            <Package />
            <Blog />
            <Opinion />
        </HomeContainer>
    );
}

export default Home;