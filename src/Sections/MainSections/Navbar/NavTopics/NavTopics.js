import { NavTopics, NavAnchor} from './NavTopicsStyles';

const Topics = () => {

    return(
        <NavTopics>
            <NavAnchor to='/'>الرئيسية</NavAnchor>
            <NavAnchor to="/about">عن هندسة البنيان للتسويق الرقمي </NavAnchor>
            <NavAnchor to='/services'>خدماتنا</NavAnchor>
            <NavAnchor to='/blog'>المدونة</NavAnchor>
            <NavAnchor to='/contact'>توصل معنا</NavAnchor>
        </NavTopics>
    );
}

export default Topics;