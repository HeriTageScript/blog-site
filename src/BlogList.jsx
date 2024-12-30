import { Link } from "react-router-dom";
import './styles/index.css'
const BlogList = ({blogs}) => {
    return ( 
        blogs.map((blogs) => (
            <div className="blog-preview" key = {blogs.id}>
                <Link to={'/blogs/'+ blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                </Link>
            </div>
       
        ))
     );
}
 
export default BlogList;