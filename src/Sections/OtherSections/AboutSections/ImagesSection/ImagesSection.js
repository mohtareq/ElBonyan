import FirstAboutImg from "../../../../Components/About/FirstAboutImg/FirstAboutImg";
import SecondAboutImg from "../../../../Components/About/SecondAboutImg/SecondAboutImg";
import ThirdAboutImg from "../../../../Components/About/ThirdAboutImg/ThirdAboutImg";
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