import LeftAbout from './AboutLeft/AboutLeft';
import RightAbout from './AboutRight/AboutRight';

import { Intro } from './AboutStyle';

const About = () => {

    return(
        <Intro>
            <RightAbout />
            <LeftAbout />
        </Intro>
    );
}

export default About;