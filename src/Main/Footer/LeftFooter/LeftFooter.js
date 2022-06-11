import FooterNav from "../SocialNav/Social";
import { Left, TopicsDiv, Topics, Topic, Icon } from "./LeftFooterStyle";

const LeftFooter = () => {

    return(
        <Left>
            <TopicsDiv>
                <Topics>التصنيفات</Topics>
                <Icon xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path id="Icon_ionic-ios-arrow-up" data-name="Icon ionic-ios-arrow-up" d="M6,4.89,10.538.257a.842.842,0,0,1,1.211,0,.892.892,0,0,1,0,1.239L6.609,6.745a.844.844,0,0,1-1.182.026L.25,1.5A.893.893,0,0,1,.25.261a.842.842,0,0,1,1.211,0Z" fill="#fff"/>
                </Icon>                
                <Topic>من نحن؟</Topic>
                <Topic>خدماتنا</Topic>
                <Topic>أعمالنا</Topic> 
                <Topic>المدونة</Topic>
            </TopicsDiv>      
            <TopicsDiv>
                <Topics>معلومات</Topics>
                <Icon xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path id="Icon_ionic-ios-arrow-up" data-name="Icon ionic-ios-arrow-up" d="M6,4.89,10.538.257a.842.842,0,0,1,1.211,0,.892.892,0,0,1,0,1.239L6.609,6.745a.844.844,0,0,1-1.182.026L.25,1.5A.893.893,0,0,1,.25.261a.842.842,0,0,1,1.211,0Z" fill="#fff"/>
                </Icon>                
                <Topic>انفاقية الاستخدام</Topic>
                <Topic>سياسة الخصوصية</Topic> 
                <Topic>الاسئلة الشائعة</Topic>
                <Topic>عن هندسة البنيان للتسويق الرقمي</Topic>
            </TopicsDiv>
            <TopicsDiv>
                <Topics>اتصل بنا</Topics>
                <Icon xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path id="Icon_ionic-ios-arrow-up" data-name="Icon ionic-ios-arrow-up" d="M6,4.89,10.538.257a.842.842,0,0,1,1.211,0,.892.892,0,0,1,0,1.239L6.609,6.745a.844.844,0,0,1-1.182.026L.25,1.5A.893.893,0,0,1,.25.261a.842.842,0,0,1,1.211,0Z" fill="#fff"/>
                </Icon>                
                <Topic>shadyceo@elbonyan.com</Topic>
                <Topic>7776 7000 974 00</Topic>
                <Topic>www.elbonyan.com</Topic> 
                <FooterNav />
            </TopicsDiv>            
        </Left>
    );
}

export default LeftFooter;