import { LeftDiv, Back } from "./LeftIntroStyle";
import FirstImg from '../../../../../Assets/billy-two.png';


const LeftIntro = () => {

    return(
        <LeftDiv>
            <img src={FirstImg} width="300" height="250" alt="img" />
        </LeftDiv>
    )
}

export default LeftIntro;