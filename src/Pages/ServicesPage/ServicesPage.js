import Head from "../../Main/Header/Header";
import ServicesTopic from "../../Sections/ServicesSections/Topic";
import { ServicesContainer } from "./ServicesPageStyle";


const Services = () => {

    return(
        <ServicesContainer>
            <Head title={"خدماتنا"} />
            <ServicesTopic />
        </ServicesContainer>
    );
}

export default Services;