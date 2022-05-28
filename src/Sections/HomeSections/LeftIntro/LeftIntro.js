import { LeftDiv, HomeImg } from "./LeftIntroStyle";
import FirstImg from '../../../Assets/first.png';


const LeftIntro = () => {

    return(
        <LeftDiv>
            <HomeImg src={FirstImg} alt="img" />
        </LeftDiv>
    )
}

export default LeftIntro;