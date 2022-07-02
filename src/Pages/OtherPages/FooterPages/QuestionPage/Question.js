import { Container, Info, Topic } from "./QuestionStyle";
import Head from "../../../../Sections/MainSections/Header/Header";
import Search from "../../../../Components/Search/Search";

const Question = () => {

    return(
        <Container>
            <Head title={"الأسئلة الشائعة"} />
            <Search />
            <Info>
                <Topic>
                    باقاتنا لا تشمل الدردشة والمحادثات المباشرة، وسيتم تطبيق رسوم إضافية في حال رغب العميل بإضافة هذه الخدمات.        
                </Topic>
            </Info>
            <Info>
                <Topic>
                    مدة الاشتراك في الباقة: شهر كامل (30) يوم، وذلك يكون بعد تواصل فريق الشركة مع العميل والاتفاق معه.      
                </Topic>
            </Info>
            <Info>
                <Topic>
                    بعد الطلب وعملية الدفع سوف يقوم فريق العمل بالتواصل معك خلال 24 ساعة من طلب الخدمة.
                </Topic>
            </Info>
            <Info>
                <Topic>
                    يمكنك اختيار شكل وعرض التصميم في إطار العدد المحدّد والمذكور مسبقاً في الباقة التي اخترتها.
                </Topic>
            </Info>
            <Info>
                <Topic>
                    يسمح للعميل بإخبار فريق الشركة بالتعديلات التي يريدها في الحساب وذلك قبل انتهاء مدة الاشتراك.
                </Topic>
            </Info>
        </Container>
    );
}

export default Question;