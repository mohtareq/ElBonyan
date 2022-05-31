import { All, Intro } from './Blogstyle';
import IntroBlog from './FirstBlog.js/FirstBlog';
import SecondBlog from './SecondBlog/SecondBlog';

const Blog = () => {

    return(
        <All>
            <Intro>
            <IntroBlog />
            <SecondBlog />
            </Intro>      
        </All>
    );
}

export default Blog;