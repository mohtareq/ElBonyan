import { HomeContainer } from "./HomeStyle";
import RightIntro from "./HomeSections/Intro/RightIntro/RightIntro";
import Nav from "./HomeSections/Navbar/Navbar";
import LeftIntro from "./HomeSections/Intro/LeftIntro/LeftIntro";
import IntroNav from "./HomeSections/Intro/IntroNav/IntroNav";

const Home = () => {

    return(
        <HomeContainer>
            <Nav />
            <RightIntro />
            <LeftIntro />
            <IntroNav />
        </HomeContainer>
    );
}

export default Home;