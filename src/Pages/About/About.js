import { AboutContainer } from "./AboutStyle";
import AboutInfo from "../../Sections/AboutSections/Information/Info";
import AboutValues from "../../Sections/AboutSections/Values/Values";
import AboutAims from "../../Sections/AboutSections/Aims/Aims";
import AboutImages from "../../Sections/AboutSections/ImagesSection/ImagesSection";
import Head from "../../Main/Header/Header";

const About = () => {

    return(
        <AboutContainer>
        <Head title={"عن هندسة البنيان للتسويق الرقمي"} />
        <AboutInfo />
            <AboutImages />
            <AboutValues />
            <AboutAims />
        </AboutContainer>
    );
}

export default About;