import FirstImg from '../../Assets/Works/Screenshot_18.png';
import SecondImg from '../../Assets/Works/Screenshot_21.png';
import ThirdImg from '../../Assets/Works/Screenshot_22.png';
import FourthImg from '../../Assets/Works/Screenshot_23.png';

import { All, WorksImg } from "./WorksImagesStyle";

const WorkImgs = () => {

    return(
        <All>
            <WorksImg src={FirstImg} alt="img" />
            <WorksImg src={SecondImg} alt="img" />
            <WorksImg src={ThirdImg} alt="img" />
            <WorksImg src={FourthImg} alt="img" />
            <WorksImg src={FirstImg} alt="img" />
            <WorksImg src={SecondImg} alt="img" />
            <WorksImg src={ThirdImg} alt="img" />
            <WorksImg src={FourthImg} alt="img" />
            <WorksImg src={FirstImg} alt="img" />
            <WorksImg src={SecondImg} alt="img" />
            <WorksImg src={ThirdImg} alt="img" />
            <WorksImg src={FourthImg} alt="img" />
        </All>
    );
}

export default WorkImgs;


