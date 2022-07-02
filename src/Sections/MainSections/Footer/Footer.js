import { All, Drop } from './FooterStyle';
import DropdownOne from '../../../Components/FooterDropDwon/DropdownOne';
import DropdownTwo from '../../../Components/FooterDropDwon/DropdownTwo';
import DropdownThree from '../../../Components/FooterDropDwon/DropdoneThree';
import End from './End/End';
import LeftFooter from './LeftFooter/LeftFooter';
import RightFooter from './RightFooter/RightFooter';

const Footer = () => {

    return(
        <All>
            <RightFooter />
            <LeftFooter />
            <Drop>
                <DropdownOne />
                <DropdownTwo />
                <DropdownThree />
            </Drop>
            <End />
        </All>
    );
}

export default Footer;