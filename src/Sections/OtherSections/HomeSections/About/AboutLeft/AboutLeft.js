import { LeftDiv, AboutImg } from "./AboutLeftStyle";
import SecondImg from '../../../../../Assets/HomePage/second.png';


const LeftAbout = () => {

    return(
        <LeftDiv>
            <AboutImg src={SecondImg} alt="img" />
        </LeftDiv>
    )
}

export default LeftAbout;