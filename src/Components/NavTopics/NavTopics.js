import { NavTopics, NavAnchor} from './NavTopicsStyles';

const Topics = () => {

    return(
        <NavTopics>
            <NavAnchor to='header' spy={true} smooth={true} offset={0} duration={1000}>الرئيسية</NavAnchor>
            <NavAnchor to='about' spy={true} smooth={true} offset={0} duration={1000}>عن هندسة البنيان للتسويق الرقمي </NavAnchor>
            <NavAnchor to='services' spy={true} smooth={true} offset={0} duration={1000}>خدماتنا</NavAnchor>
            <NavAnchor to='works' spy={true} smooth={true} offset={0} duration={1000}>أعمالنا</NavAnchor>
            <NavAnchor to='blog' spy={true} smooth={true} offset={0} duration={1000}>المدونة</NavAnchor>
            <NavAnchor to='contact' spy={true} smooth={true} offset={0} duration={1000}>توصل معنا</NavAnchor>
        </NavTopics>
    );
}

export default Topics;