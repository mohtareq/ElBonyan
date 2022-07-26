import IntroWorks from './FirstWorks/FirstWorks';
import SecondWorks from './SecondWorks/SecondWorks';
import { All, Intro, Anchor } from './WorksStyle';

const WroksSection = () => {

    return(
        <All id='works'>
            <Intro>
            <IntroWorks />
            <SecondWorks />
            <Anchor to='/works'>عرض جميع أعمالنا</Anchor>
            </Intro>      
        </All>
    );
}

export default WroksSection;