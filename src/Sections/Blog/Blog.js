import { Intro } from './Blogstyle';
import IntroBlog from './FirstBlog.js/FirstBlog';
import SecondBlog from './SecondBlog/SecondBlog';

const Blog = () => {

    return(
        <Intro>
            <IntroBlog />
            <SecondBlog />
        </Intro>
    );
}

export default Blog;