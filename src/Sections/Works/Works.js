import IntroWorks from './FirstWorks/FirstWorks';
import SecondWorks from './SecondWorks/SecondWorks';
import { All, Intro, Anchor } from './WorksStyle';

const WroksSection = () => {

    return(
        <All>
            <Intro>
            <IntroWorks />
            <SecondWorks />
            <Anchor>عرض جميع أعمالنا</Anchor>
            </Intro>      
        </All>
    );
}

export default WroksSection;