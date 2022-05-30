import End from './End/End';
import { All } from './FooterStyle';
import LeftFooter from './LeftFooter/LeftFooter';
import RightFooter from './RightFooter/RightFooter';

const Footer = () => {

    return(
        <All>
            <RightFooter />
            <LeftFooter />
            <hr />
            <End />
        </All>
    );
}

export default Footer;