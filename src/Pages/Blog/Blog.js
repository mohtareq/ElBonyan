import Head from "../../Main/Header/Header";
import BlogCards from "../../Sections/BlogSections/BlogCards";
import { BlogContainer } from "./BlogStyle";


const Blog = () => {

    return(
        <BlogContainer>
            <Head title={"المدونة"} />
            <BlogCards />
        </BlogContainer>
    );
}

export default Blog;