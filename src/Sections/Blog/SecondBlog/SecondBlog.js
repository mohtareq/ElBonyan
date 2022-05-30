import { Column, SecDiv, BlogImg, AnchorDiv, Anchor, PackageP } from './SecondBlogStyle';
import First from '../../../Assets/test.png';
import Second from '../../../Assets/test2.png';
import Third from '../../../Assets/test3.png';


const SecondBlog = () => {

    return(
        <SecDiv>
            <Column>
                <BlogImg src={First} alt="img" />
                <PackageP> 
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
                </PackageP>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column>
                <BlogImg src={Second} alt="img" />
                <PackageP> 
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
                </PackageP>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
            <Column>
                <BlogImg src={Third} alt="img" />
                <PackageP> 
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
                </PackageP>
                <AnchorDiv>
                    <Anchor>عرض المقال</Anchor>       
                </AnchorDiv>
            </Column>
        </SecDiv>
    )
}

export default SecondBlog;