import Head from "../../Main/Header/Header";
import { Container, Info, Topic, Anchor } from "./SponsStyle";


const Spons = () => {

    return(
        <Container>
            <Head title={"الإعلانات الممولة"} />
            <Info>
                <Topic>
                    نعمل على إعداد وتَصميم حملات إعلانية وتسويقية تُبقيك بالقرب من جمهورك المستهدف على شبكات التواصل الاجتماعية
                    المختلفة وتَزيد الوعي حول نَشاط علامتك التجارية، حيث تهدف الإعلانات الممول الوصول إلى أكبر عدد ممكن من الفئة المستهدفة
                    الخاصة من الجمهور العام، ويكمن هدفها الأساسي هي بيع أكبر للمنتجات والسلع المُروّج لها، وبالتالي الحصول على أكبر قدر
                    من الأرباح، وتتعدد أنواع الإعلانات الممولة بناءً على المنصة التي ترغب الشركة في الإعلان عليها.
                </Topic>
            </Info>
            <Anchor>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default Spons;