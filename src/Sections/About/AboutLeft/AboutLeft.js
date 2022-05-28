import { LeftDiv, AboutImg } from "./AboutLeftStyle";
import FirstImg from '../../../Assets/first.png';


const LeftAbout = () => {

    return(
        <LeftDiv>
            <AboutImg src={FirstImg} alt="img" />
        </LeftDiv>
    )
}

export default LeftAbout;