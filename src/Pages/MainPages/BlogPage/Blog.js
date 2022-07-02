import { BlogContainer } from "./BlogStyle";
import Head from "../../../Sections/MainSections/Header/Header";
import BlogCards from "../../../Sections/OtherSections/BlogSections/BlogCards";


const Blog = () => {

    return(
        <BlogContainer>
            <Head title={"المدونة"} />
            <BlogCards />
        </BlogContainer>
    );
}

export default Blog;