import { HomeContainer } from "./HomeStyle";
import HomeSection from "../../Sections/HomeSections/HomeSection";
import Nav from "../../Sections/Navbar/Navbar";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <HomeSection/>
        </HomeContainer>
    );
}

export default Home;