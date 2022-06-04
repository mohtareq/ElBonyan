import styled from "styled-components";
import { Link as Scroll} from 'react-scroll';

export const NavTopics = styled.div`
    float: left;
    margin: auto 100px;
    padding: 20px;
    @media (max-width: 1300px) {
        margin: auto 10px;
        padding: 20px 0;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavAnchor = styled(Scroll)`
    color: #434343;    
    font-size: 18px; 
    text-decoration: none;
    margin: auto 20px;
    padding-top: 10px;
    cursor: pointer;
    :hover,
    :focus {
    color: #F07F1A;
    border-top: 2px solid #F07F1A;
    }
    @media (max-width: 1300px) {
        font-size: 16px; 
        margin: auto 10px;
    }
`;

