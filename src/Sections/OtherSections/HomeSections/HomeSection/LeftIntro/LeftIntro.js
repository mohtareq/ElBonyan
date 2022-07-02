import { LeftDiv, HomeImg } from "./LeftIntroStyle";
import FirstImg from '../../../../../Assets/HomePage/first.png';


const LeftIntro = () => {

    return(
        <LeftDiv>
            <HomeImg src={FirstImg} alt="img" />
        </LeftDiv>
    )
}

export default LeftIntro;