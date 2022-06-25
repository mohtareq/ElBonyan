import Head from "../../Main/Header/Header";
import Cards from "../../Sections/ServicesSections/Cards/Card";
import ServicesTopic from "../../Sections/ServicesSections/Topic/Topic";
import { ServicesContainer } from "./ServicesPageStyle";

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