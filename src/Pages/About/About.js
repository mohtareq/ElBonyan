import { AboutContainer } from "./AboutStyle";
import AboutHeader from "../../AboutSections/Header/Header";
import AboutInfo from "../../AboutSections/Information/Info";
import AboutValues from "../../AboutSections/Values/Values";
import AboutAims from "../../AboutSections/Aims/Aims";
import AboutImages from "../../AboutSections/ImagesSection/ImagesSection";

const About = () => {

    return(
        <AboutContainer>
            <AboutHeader />
            <AboutInfo />
            <AboutImages />
            <AboutValues />
            <AboutAims />
        </AboutContainer>
    );
}

export default About;