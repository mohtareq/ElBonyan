import Head from "../../../../Sections/MainSections/Header/Header";
import { Container, Title, Info, Topic, SubTopic, Anchor } from "./GraphicStyle";


const Graphic = () => {

    return(
        <Container>
            <Head title={" تصميم الجرافيك "} />
            <Info>
                <Title>تصميم الهوية البصرية</Title>
                <Topic>
                    ننفذ تصميم هويتك البصرية التي تتفرد بها، ونصنع لك علامة فارقة في القطاع الذي تعمل فيه.
                </Topic>
            </Info>
            <Info>
                <Title>التصميم الجرافيكي</Title>
                <Topic>
                    بأسلوب مبتكر نسعى لتنفيذ كافة التصاميم التي تحتاجها في عالم الجرافيك، وهي كالتالي:
                </Topic>
                <SubTopic>- تصميم البروشورات الإعلانية.</SubTopic>
                <SubTopic>- تصميم المطبوعات والكتب والمجلات.</SubTopic>
                <SubTopic>- تصميم الوجهات البصرية.</SubTopic>
            </Info>
            <Info>
                <Title>تصميم تجربة المستخدم</Title>
                <Topic>
                    عن طريق معرفتنا الكافية لاحتياجات العملاء مع فهم ومعرفة أنماط السلوك الذي ( UX Design ) تصميم تجربة المستخدم
                    .يسلكه المستخدمون , ومن ثم المساهمة في تصميم تجربة مستخدم مميزة يكتب لها الاستمرار
                </Topic>
            </Info>
            <Anchor>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default Graphic;