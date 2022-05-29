import { NoteSection, NoteImg, Anchor, Title, SubTitle, Right, Left } from './NoteStyle';
import FirstImg from '../../Assets/first.png';

const Note = () => {

    return(
        <NoteSection>
            <Right>
                <Title>هل لديك أي فكرة مشروع في عقلك</Title>
                <SubTitle>
                    نحن نقدم خدمات مبتكرة في جميع أنحاء العالم نعمل سويا للتخطيط في مشروعك والعمل على إنجاح أعمالك من خلال حلول عالية الأداء 
                </SubTitle>
                <Anchor>أطلب خدمة </Anchor>
            </Right>
            <Left>
                <div>
                    <NoteImg src={FirstImg} alt="img" />
                </div>            
            </Left>

        </NoteSection>
    )
}

export default Note;