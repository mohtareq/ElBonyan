import RightIntro from './RightIntro/RightIntro';
import LeftIntro from './LeftIntro/LeftIntro';
import IntroNav from './IntroNav/IntroNav';

import { Intro } from './HomeSectionStyle';

const HomeSection = () => {

    return(
        <Intro>
            <RightIntro />
            <LeftIntro />
            <IntroNav />
        </Intro>
    );
}

export default HomeSection;