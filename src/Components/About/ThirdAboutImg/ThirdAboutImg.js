import Third from '../../../Assets/AboutPage/three.png';

import { Box, RightImg, Topic, Title, SubTitle, LeftImg} from './ThirdAboutImgStyle';


const ThirdAboutImg = () => {

    return(
        <Box>
            <RightImg src={Third} alt="img" />
            <Topic>
                <Title>مُهمتنا</Title>
                <SubTitle>
                    تتمثل مُهمتنا في خلق قيمة ملموسة لِخدماتنا الفَعالة، قيمة تسعى دائماً نحو التميز في توفير أعلى مستوى من الحلول البرمجية والخدمات التسويقية التي تدعم نمو مشاريع أعمال العملاء الالكترونية وتُلبي احتياجات الشركات وتحسن أداء أنشطتها بكفاءة عالية.
                </SubTitle>
            </Topic>
            <LeftImg src={Third} alt="img" />
        </Box>
    );
}

export default ThirdAboutImg;