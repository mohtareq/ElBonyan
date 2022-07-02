import { AboutContainer } from "./AboutStyle";
import Head from "../../../Sections/MainSections/Header/Header";
import AboutInfo from "../../../Sections/OtherSections/AboutSections/Information/Info";
import AboutValues from "../../../Sections/OtherSections/AboutSections/Values/Values";
import AboutAims from "../../../Sections/OtherSections/AboutSections/Aims/Aims";
import AboutImages from "../../../Sections/OtherSections/AboutSections/ImagesSection/ImagesSection";

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