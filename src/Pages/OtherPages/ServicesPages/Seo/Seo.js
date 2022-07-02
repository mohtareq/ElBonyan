import { Container, Info, Topic, ImgContainer, SeoImg, Anchor } from "./SeoStyle";
import Head from "../../../../Sections/MainSections/Header/Header";
import Img from '../../../../Assets/ServicesImgs/seo-img.png';

const SeoPage = () => {

    return(
        <Container>
            <Head title={"تهيئة محركات البحث SEO"} />
            <Info>
                <Topic>
                    نعمل على تقديم خدمات سيو احترافية تساعدك على تحسين ظهور موقعك في نتائج البحث ويزداد عدد زيارات جمهورك
                    محترف ستصبح SEO ستكون على الطريق الصحيح لتحقيق أهدافك التجارية . وبمساعدة خبير SEO المستهدف , مع خدمات
                    مهام السيو أسهل.            
                </Topic>
                <Topic>
                    في هندسة البنيان للتسويق الرقمي و من خلال فريق عمل مميز نساعدك على تطوير اعمالك من خلال تحسين ظهور موقعك
                    في نتائج البحث.
                </Topic>
            </Info>
            <ImgContainer>
                <SeoImg src={Img} alt="seo" />
            </ImgContainer>
            <Anchor to='/services/price'>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default SeoPage;