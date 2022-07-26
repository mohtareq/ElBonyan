import Head from "../../../../Sections/MainSections/Header/Header";
import { Container, Info, Topic, SubTopic, Anchor } from "./ContentStyle";


const Content = () => {

    return(
        <Container>
            <Head title={"كتابة المحتوى"} />
            <Info>
                <Topic>
                    :نكتب المحتوى ببصمة مميزة تحكي عنك، مهما كان المحتوى الذي تريد، والذي يتمثل في عدة أنواع، وهي كالتالي
                </Topic>
            </Info>
            <Info>
                <SubTopic>- كتابة الخطط التسويقية للمنصات الاجتماعية .</SubTopic>
                <Topic>
                    وهو جدول مُنجز بإتقان، بحيث نكتب فيه كل أفكار المحتوى المتنوعة.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- كتابة محتوى المواقع .</SubTopic>
                <Topic>
                    نكتب محتوى تعريفي عن مجال عملك، ونساهم في تميُز محتواك.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- كتابة المقالات في جميع التخصصات .</SubTopic>
                <Topic>
                    كتابة المقالات للمدونات من أهم الأسباب لتصدير موقعك الالكتروني في محركات البحث.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- كتابة السيناريو للأفلام ومقاطع الموشن جرافيك .</SubTopic>
                <Topic>
                    كتابة المحتوى للفيديو هو علم وفن في آنٍ واحد لإيصال رسالتك في أبهى حُلّة.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- بناء المبادرات التسويقية .</SubTopic>
                <Topic>
                    كتابة المحتوى للفيديو هو علم وفن في آنٍ واحد لإيصال رسالتك في أبهى حُلّة.
                </Topic>
            </Info>
            <Anchor to='/price'>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default Content;