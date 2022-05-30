import { Right, LogoDiv, FooterLogo, Topic, EmailForm, Email, EmailAnchor } from "./RightFooterStyle";
import Logo from '../../../Assets/footer-logo.svg';

const RightFooter = () => {

    return(
        <Right>
            <LogoDiv>
                <FooterLogo src={Logo} alt="logo" /> 
            </LogoDiv>
            <Topic>ادخل بريدك الإلكتروني واشترك بالقائمة البريدية لتصلك المستجدات أولا بأول
            </Topic>
            <EmailForm>
                <Email type="email" placeholder="البريد الالكتروني" />
                <EmailAnchor for="email">إرسال</EmailAnchor>
            </EmailForm>        
        </Right>
    );
}

export default RightFooter;