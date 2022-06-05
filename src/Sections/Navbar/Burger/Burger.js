import { slide as Menu } from "react-burger-menu";
import Logo from "../NavLogo/NavLogo";
import { All, NavAnchor } from "./BurgerStyle";

import './style.css'

const BurgerMenu = ({...props}) => {
    return (
        // Pass on our props
        <All>
            <Menu className="mobile-menu">
                <Logo />
                <NavAnchor to='header' spy={true} smooth={true} offset={0} duration={1000}>الرئيسية</NavAnchor>
                <NavAnchor to='about' spy={true} smooth={true} offset={0} duration={1000}>عن هندسة البنيان للتسويق الرقمي </NavAnchor>
                <NavAnchor to='services' spy={true} smooth={true} offset={0} duration={1000}>خدماتنا</NavAnchor>
                <NavAnchor to='works' spy={true} smooth={true} offset={0} duration={1000}>أعمالنا</NavAnchor>
                <NavAnchor to='blog' spy={true} smooth={true} offset={0} duration={1000}>المدونة</NavAnchor>
                <NavAnchor to='contact' spy={true} smooth={true} offset={0} duration={1000}>توصل معنا</NavAnchor>
            </Menu>
        </All>
      );
}


export default BurgerMenu;