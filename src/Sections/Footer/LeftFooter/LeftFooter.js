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
                <Topic>من نحن؟</Topic>
                <Topic>انفاقية الاستخدام</Topic>
                <Topic>سياسة الخصوصية</Topic> 
                <Topic>الاسئلة الشائعة</Topic>
            </TopicsDiv>
            <TopicsDiv>
                <Topics>اتصل بنا</Topics>
                <Topic>shadyceo@elbonyan.com</Topic>
                <Topic>7776 7000 974 00</Topic>
                <Topic>www.elbonyan.com</Topic> 
            </TopicsDiv>            
        </Left>
    );
}

export default LeftFooter;