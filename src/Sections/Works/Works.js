import IntroWorks from './FirstWorks/FirstWorks';
import SecondWorks from './SecondWorks/SecondWorks';
import { Intro, Anchor } from './WorksStyle';

const WroksSection = () => {

    return(
        <Intro>
        <IntroWorks />
        <SecondWorks />
        <Anchor>عرض جميع أعمالنا</Anchor>
        </Intro>
    );
}

export default WroksSection;