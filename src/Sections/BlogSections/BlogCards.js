import Second from '../../Assets/Blogs/test2.png';
import First from '../../Assets/Blogs/test3.png';
import Third from '../../Assets/Blogs/test.png';
import Fourth from '../../Assets/Blogs/test4.jpg';
import Fifth from '../../Assets/Blogs/test5.jpg';
import Sixth from '../../Assets/Blogs/test6.jpg';


import { All, Column, BlogImg, AnchorDiv, Anchor, Title, SubTitle } from "./BlogCardsStyle";

const Blogs = () => {

    return(
        <All>
            <Column to='/blog/marketing'>
                <BlogImg src={Second} alt="img" />
                <Title>أهمية التسويق للمبيعات</Title>
                <SubTitle> 
                    أهمية التسويق للمبيعات هناك سوء فهم يحدث كثيرًا عند بعض الناس، ويختلط لديهم مفهوم التسويق مع مفهوم البيع،                 
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column to='/blog/podcast'>
                <BlogImg src={First} alt="img" />
                <Title>البودكاست</Title>
                <SubTitle>
                    البودكاست ملايين الناس في جميع أنحاء العالم تستمع للبودكاست في كل مكان، في السيارة، في النوادي، وأثناء تأدية المهام اليومية،
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column to='/blog/investment'>
                <BlogImg src={Third} alt="img" />
                <Title>استثمار طرق الربح من المنصات الاجتماعية</Title>
                <SubTitle>
                    استثمار طرق الربح من المنصات الاجتماعية أصبحت تزداد طرق الربح عن طريق المنصات الاجتماعية يوماً بعد يوم، حيث تتنوع ما
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column to='/blog/procedures'>
                <BlogImg src={Fourth} alt="img" />
                <Title>الإجراءات المتبعة عند عدم جهوزية الموقع لعرض الإعلانات</Title>
                <SubTitle>
                    الإجراءات المتبعة عند عدم جهوزية الموقع لعرض الإعلانات هناك العديد من أصحاب المواقع الذين يتساءلون حول الإجراءات الواجب إتباعها لقبولهم
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column to='/blog/adminstrative'>
                <BlogImg src={Fifth} alt="img" />
                <Title>إداراة المواقع</Title>
                <SubTitle>
                    إداراة المواقع بطريقة صحيحة مواقع الويب هي صفحات يتم الوصول إليها عبر الإنترنت من خلال متصفح الويب. يتكون موقع الويب
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column to='/blog/design'>
                <BlogImg src={Sixth} alt="img" />
                <Title>أسرار تصميم المواقع الإلكترونية الناجحة</Title>
                <SubTitle>
                    أسرار تصميم المواقع الإلكترونية الناجحة تعد المواقع الإلكترونية من أكثر الخدمات أهمية في الوقت الحالي، حيث تُعرّف على أنها عبارة
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
        </All>
    );
}

export default Blogs;


