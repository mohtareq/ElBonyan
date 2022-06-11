import Second from '../../Assets/AboutPage/two.png';

import { Box, LeftImg, Topic, Title, SubTitle } from './SecondAboutImgStyle';


const SecondAboutImg = () => {

    return(
        <Box>
        <LeftImg src={Second} alt="img" />

            <Topic>
                <Title>رؤيتنا</Title>
                <SubTitle>
                    نَسعى لأن نكون شريك نجاحٍ ذات بَصمة مميزة يُساهم في تَطوير ونمو أعمال العملاء التِجارية ونجاحِ مَشاريعهم الرقمية.
                </SubTitle>
            </Topic>
        </Box>
    );
}

export default SecondAboutImg;