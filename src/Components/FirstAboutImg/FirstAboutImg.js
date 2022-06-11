import First from '../../Assets/AboutPage/one.png';
import { Box, RightImg, Topic, Title, SubTitle } from './FirstAboutImgStyle';

const FirstAboutImg = () => {

    return(
        <Box>
            <RightImg src={First} alt="img" />
            <Topic>
                <Title>رسالتنا</Title>
                <SubTitle>
                    تَمكين عُملائنا من إحداث تغيراتٍ ملحوظة في بيئة أعمالهم وتحقيق نتائج ايجابية مُستدامة في أهداف مشاريعهم.
                </SubTitle>
            </Topic>
        </Box>
    );
}

export default FirstAboutImg;