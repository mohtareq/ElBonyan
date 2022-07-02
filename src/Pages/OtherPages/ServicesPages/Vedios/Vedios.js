import { Container, Info, Topic, Anchor } from "./VediosStyle";
import Head from "../../../../Sections/MainSections/Header/Header";

const Vedios = () => {

    return(
        <Container>
            <Head title={"مونتاج الفيديوهات والموشن جرافيك"} />
            <Info>
                <Topic>
                    تعد تقنية المونتاج والتحرير من المهام المعقدة والتي تحتاج إلى تركيز عالٍ جداً، لذلك نقوم نحن بهذه المهام بإبداع واتقان
                    حيث نعمل على الجمع بين مجموعة من اللقطات والمقاطع بتسلسل مناسب وملائم لكل فيديو على حدة، إلى جانب إنجاز
                    فيديوهات الموشن جرافيك بكافة تفاصيلها وذلك بهدف تطوير المحتوى البصري الخاص بالعملاء على المنصات الاجتماعية و
                    المواقع الالكترونية.
                </Topic>
            </Info>
            <Anchor>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default Vedios;