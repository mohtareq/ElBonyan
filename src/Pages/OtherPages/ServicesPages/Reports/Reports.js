import Head from "../../../../Sections/MainSections/Header/Header";
import { Container, Info, Topic, Anchor } from "./ReportsStyle";


const Reports = () => {

    return(
        <Container>
            <Head title={"التقارير وتحليل الأداء"} />
            <Info>
                <Topic>
                    يعتبر تحليل بيانات الأداء من أهم مراحل ما بعد التسويق وإدارة الأداء، حيث توفر مجموعة من الملاحظات والنصائح والإحصائيات
                    الخاصة بالفترة التسويقية، وذلك لتساهم في عملية القرار والفهم العميق اللازم لتطوير الخطط التسويقية القادمة، مع إمكانية
                    تحديد فرص التطوير الواجب اتباعها، حيث نقوم بهذه المهام ليبقَ العميل مطّلع بشكل دوري على خطة سير العمل بالاتجاه
                    الصحيح.
                </Topic>
            </Info>
            <Anchor to='/price'>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default Reports;