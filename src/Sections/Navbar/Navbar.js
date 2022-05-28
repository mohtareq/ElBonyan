import Topics from '../../Components/NavTopics/NavTopics';
import Logo from '../../Components/NavLogo/NavLogo';

import { NavBar } from './NavbarStyle';

const Nav = () => {

    return(
        <NavBar>
            <Topics />
            <Logo />
        </NavBar>
    )
}

export default Nav;