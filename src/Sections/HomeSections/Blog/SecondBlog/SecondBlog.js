import { Column, SecDiv, BlogImg, AnchorDiv, Anchor, Title, SubTitle } from './SecondBlogStyle';
import First from '../../../../Assets/Blogs/test.png';
import Second from '../../../../Assets/Blogs/test2.png';
import Third from '../../../../Assets/Blogs/test3.png';


const SecondBlog = () => {

    return(
        <SecDiv>
            <Column>
                <BlogImg src={First} alt="img" />
                <Title>أهمية التسويق للمبيعات</Title>
                <SubTitle> 
                    أهمية التسويق للمبيعات هناك سوء فهم يحدث كثيرًا عند بعض الناس، ويختلط لديهم مفهوم التسويق مع مفهوم البيع،                 
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column>
                <BlogImg src={Third} alt="img" />
                <Title>البودكاست</Title>
                <SubTitle> 
                    البودكاست ملايين الناس في جميع أنحاء العالم تستمع للبودكاست في كل مكان، في السيارة، في النوادي، وأثناء تأدية المهام اليومية،                
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column>
                <BlogImg src={Second} alt="img" />
                <Title>استثمار طرق الربح من المنصات الاجتماعية</Title>
                <SubTitle> 
                    استثمار طرق الربح من المنصات الاجتماعية أصبحت تزداد طرق الربح عن طريق المنصات الاجتماعية يوماً بعد يوم،                
                </SubTitle>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
        </SecDiv>
    )
}

export default SecondBlog;