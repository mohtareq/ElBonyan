import Topics from './NavTopics/NavTopics';
import Logo from './NavLogo/NavLogo';

import { NavBar } from './NavbarStyle';
import BurgerMenu from './Burger/Burger';

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