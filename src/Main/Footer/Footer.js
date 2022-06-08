import DropdownThree from '../../Components/DropDwon/DropdoneThree';
import DropdownOne from '../../Components/DropDwon/DropdownOne';
import DropdownTwo from '../../Components/DropDwon/DropdownTwo';
import End from './End/End';
import { All, Drop } from './FooterStyle';
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