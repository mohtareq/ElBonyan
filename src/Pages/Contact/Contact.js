import Head from "../../Main/Header/Header";
import DownSection from "../../Sections/ContactSections/Down/Down";
import UpperSection from "../../Sections/ContactSections/Upper/Upper";
import { ContactContainer } from "./ContactStyle";


const Contact = () => {

    return(
        <ContactContainer>
            <Head title={"تواصل معنا"} />
            <UpperSection />
            <DownSection />
        </ContactContainer>
    );
}

export default Contact;