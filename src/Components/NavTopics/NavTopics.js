import { NavTopics, NavAnchor} from './NavTopicsStyles';

const Topics = () => {

    return(
        <NavTopics>
            <NavAnchor href="#header">الرئيسية</NavAnchor>
            <NavAnchor href="#about">عن هندسة البنيات للتسويق الرقمي </NavAnchor>
            <NavAnchor href="#services">خدماتنا</NavAnchor>
            <NavAnchor href="#works">أعمالنا</NavAnchor>
            <NavAnchor href="#blogs">المدونة</NavAnchor>
            <NavAnchor href="#contact">توصل معنا</NavAnchor>
        </NavTopics>
    );
}

export default Topics;