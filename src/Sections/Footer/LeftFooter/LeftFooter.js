import FooterNav from "../SocialNav/Social";
import { Left, TopicsDiv, Topics, Topic } from "./LeftFooterStyle";

const LeftFooter = () => {

    return(
        <Left>
            <TopicsDiv>
                <Topics>التصنيفات</Topics>
                <Topic>من نحن؟</Topic>
                <Topic>خدماتنا</Topic>
                <Topic>أعمالنا</Topic> 
                <Topic>المدونة</Topic>
            </TopicsDiv>      
            <TopicsDiv>
                <Topics>معلومات</Topics>
                <Topic>انفاقية الاستخدام</Topic>
                <Topic>سياسة الخصوصية</Topic> 
                <Topic>الاسئلة الشائعة</Topic>
                <Topic>عن هندسة البنيان للتسويق الرقمي</Topic>

            </TopicsDiv>
            <TopicsDiv>
                <Topics>اتصل بنا</Topics>
                <Topic>shadyceo@elbonyan.com</Topic>
                <Topic>7776 7000 974 00</Topic>
                <Topic>www.elbonyan.com</Topic> 
                <FooterNav />
            </TopicsDiv>            
        </Left>
    );
}

export default LeftFooter;