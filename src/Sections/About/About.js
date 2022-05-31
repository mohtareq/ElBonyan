import LeftAbout from './AboutLeft/AboutLeft';
import RightAbout from './AboutRight/AboutRight';

import { Intro } from './AboutStyle';

const AboutSection = () => {

    return(
        <Intro id='about'>
            <RightAbout />
            <LeftAbout />
        </Intro>
    );
}

export default AboutSection;