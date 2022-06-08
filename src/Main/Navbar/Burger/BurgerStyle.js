import styled from "styled-components";
import { Link as Scroll} from 'react-scroll';

export const All = styled.div`
    @media (min-width: 901px) {
        display: none;
    }
`;

export const NavAnchor = styled(Scroll)`
    color: #434343;    
    font-size: 18px; 
    text-decoration: none;
    cursor: pointer;
    :hover,
    :focus {
    color: #F07F1A;
    }
`;

