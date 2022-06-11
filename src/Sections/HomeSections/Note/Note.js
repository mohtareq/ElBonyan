import { All, NoteSection, Anchor, Title, SubTitle, Right } from './NoteStyle';

const Note = () => {

    return(
        <All>
        <NoteSection>
        <Right>
        <Title>هل لديك أي فكرة مشروع في عقلك</Title>
        <SubTitle>
            نحن نقدم خدمات مبتكرة في جميع أنحاء العالم نعمل سويا للتخطيط في مشروعك والعمل على إنجاح أعمالك من خلال حلول عالية الأداء 
        </SubTitle>
        <Anchor>أطلب خدمة </Anchor>
    </Right>
        </NoteSection>
        </All>
    )
}

export default Note;