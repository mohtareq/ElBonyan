import { ServicesContainer } from "./ServicesPageStyle";
import Head from "../../../Sections/MainSections/Header/Header";
import Cards from "../../../Sections/OtherSections/ServicesSections/Cards/Card";
import ServicesTopic from "../../../Sections/OtherSections/ServicesSections/Topic/Topic";

const Services = () => {

    return(
        <ServicesContainer>
            <Head title={"خدماتنا"} />
            <ServicesTopic />
            <Cards />
        </ServicesContainer>
    );
}

export default Services;