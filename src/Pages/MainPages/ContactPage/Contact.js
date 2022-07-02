import { ContactContainer } from "./ContactStyle";
import Head from "../../../Sections/MainSections/Header/Header";
import UpperSection from "../../../Sections/OtherSections/ContactSections/Upper/Upper";
import DownSection from "../../../Sections/OtherSections/ContactSections/Down/Down";


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