import { All } from './FooterStyle';
import LeftFooter from './LeftFooter/LeftFooter';
import RightFooter from './RightFooter/RightFooter';

const Footer = () => {

    return(
        <All>
            <RightFooter />
            <LeftFooter />
        </All>
    );
}

export default Footer;