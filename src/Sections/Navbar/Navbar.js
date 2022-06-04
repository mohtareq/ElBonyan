import Topics from '../../Components/NavTopics/NavTopics';
import Logo from '../../Components/NavLogo/NavLogo';

import { NavBar } from './NavbarStyle';
import BurgerMenu from '../../Components/Burger/Burger';

const Nav = () => {

    return(
        <NavBar>
            <BurgerMenu />
            <Topics />
            <Logo />
        </NavBar>
    )
}

export default Nav;