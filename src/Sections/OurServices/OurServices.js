import { All, Intro } from './OurServicesStyle';

import IntroServices from './IntroServices/IntroServices';
import SecondServices from './SecondServices/SecondServices';


const OurServices = () => {

    return(
        <All id='services'>
            <Intro>
                <IntroServices />
                <SecondServices />
            </Intro>      
        </All>
    );
}

export default OurServices;
