import { Container, Info, Topic, SubTopic, Anchor } from "./SocialMediaStyle";
import Head from "../../../../Sections/MainSections/Header/Header";

const SocialMedia = () => {

    return(
        <Container>
            <Head title={"خدمات التسويق وإدارة حسابات التواصل الإجتماعي"} />
            <Info>
                <Topic>
                    نساهم في إدارة منصاتك، في الوقت الذي أصبحت وسائل التواصل أداة أساسية اليوم للوصول إلى فئة العملاء المحتملين
                    كما أن الخوارزميات تعرف ما الخدمة أو المنتج الذي يبحثون عنه، وهذا يجعل استهدافهم أسهل.
                </Topic>
                <Topic>
                    لذلك نحن نعمل على إدارة صفحاتك عبر وسائل التواصل الاجتماعي (يوتيوب، انستغرام، تويتر، يوتيوب، فيسبوك، تيك توك، سناب شات، واتسآب).
                </Topic>
            </Info>
            <Info>
                <SubTopic>-  بناء الخطط التسويقية.</SubTopic>
                <Topic>
                    نساعدك في بناء الخطة التسويقية، والتي تعد خارطة الطريق التي تعتمد عليها أي شركة لتنظيم وتنفيذ الاستراتيجيات
                    التسويقية المختلفة والإشراف عليها لتحقيق أهداف الشركة.
                </Topic>
            </Info>
            <Info>
                <SubTopic>-  إطلاق وإدارة الحملات الإعلانية عبر جميع المنصات.</SubTopic>
                <Topic>
                    نقوم بعمليات تخطيط والتحليل والتتبع والتنفيذ لإنجاح الحملة التسويقيّة، حيث يمكن استخدام هذه الأنشطة كافة لإطلاق
                    حملة جديدة والترويج لهدفٍ ما.
                </Topic>
            </Info>
            <Info>
                <SubTopic>-  التسويق عبر محركات البحث SEO.</SubTopic>
                <Topic>
                 نستخدم الإعلانات المدفوعة لإظهار موقع الويب الخاص بك على صفحات برنامج SERP، من Bing و Google وغيرها من محركات البحث.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- جمع بيانات العملاء المحتملين.</SubTopic>
                <Topic>
                    نسعى لتجميع بيانات العملاء بهدف إنشاء حملات إعلانية للعثور على العملاء الذين يطلبون خدماتهم أو منتجاتهم.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- حملات البريد الإلكتروني.</SubTopic>
                <Topic>
                    نعتمد في حملة التسويق عبر البريد الإلكتروني على نص يتم إرساله من نشاط تجاري إلى العملاء وتعمل على تشجيع
                    مستقبلي الرسالة على اتخاذ قرار مع نشاطك التجاري.
                </Topic>
            </Info>
            <Info>
                <SubTopic>- دراسة المنافسين.</SubTopic>
                <Topic>
                    نحلل وندرس طبيعة وواقع منافسيك، وهي الخطوة الأولى والرئيسية في التسويق، وتهدف لمعرفة نقاط القوة والضعف لكل
                    منافس ذلك لخلق ميزة تنافسية مميزة.
                </Topic>
            </Info>
            <Anchor to='/price'>أطلب عرض سعر</Anchor>
        </Container>
    );
}

export default SocialMedia;