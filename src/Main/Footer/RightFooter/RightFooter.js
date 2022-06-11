import { Right, LogoDiv, FooterLogo, Topic, EmailForm, Email, EmailLabel } from "./RightFooterStyle";
import Logo from '../../../Assets/Logo/footer-logo.svg';

const RightFooter = () => {

    return(
        <Right>
            <LogoDiv>
                <FooterLogo src={Logo} alt="logo" /> 
            </LogoDiv>
            <Topic>ادخل بريدك الإلكتروني واشترك بالقائمة البريدية <br/> لتصلك المستجدات أولا بأول
            </Topic>
            <EmailForm>
                <Email type="email" placeholder="البريد الالكتروني" />
                <EmailLabel>إرسال</EmailLabel>
            </EmailForm>        
        </Right>
    );
}

export default RightFooter;