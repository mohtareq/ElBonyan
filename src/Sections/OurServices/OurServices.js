
import IntroServices from './IntroServices/IntroServices';
import { Intro } from './OurServicesStyle';
import SecondServices from './SecondServices/SecondServices';


const OurServices = () => {

    return(
        <Intro>
            <IntroServices />
            <SecondServices />
        </Intro>
    );
}

export default OurServices;