import FirstAboutImg from "../../Components/FirstAboutImg/FirstAboutImg";
import SecondAboutImg from "../../Components/SecondAboutImg/SecondAboutImg";
import ThirdAboutImg from "../../Components/ThirdAboutImg/ThirdAboutImg";
import { Container } from "./ImagesSectionStyle";

const AboutImages = () => {

    return(
        <Container>
            <FirstAboutImg />
            <SecondAboutImg />
            <ThirdAboutImg />
        </Container>
    );
}

export default AboutImages;