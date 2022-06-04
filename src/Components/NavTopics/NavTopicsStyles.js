import styled from "styled-components";
import { Link as Scroll} from 'react-scroll';

export const NavTopics = styled.div`
    float: left;
    margin: auto 10px;
    padding: 20px;
    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavAnchor = styled(Scroll)`
    color: #434343;    
    font-size: 15px; 
    text-decoration: none;
    padding: 15px;
    cursor: pointer;
    :hover,
    :focus {
    color: #F07F1A;
    border-top: 2px solid #F07F1A;
    }
`;

