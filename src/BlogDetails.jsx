    import{useParams, useNavigate} from 'react-router-dom'
    import useFetch from './useFetch';
    // import {useNavigate} from 'react'
    const BlogDetails = () => {
        const{id} = useParams()
        const navigate = useNavigate()
        const{data:blog, error, load} = useFetch("http://localhost:8000/blogs/"+ id)
        const handleClick = () =>{
            fetch('http://localhost:8000/blogs/'+ blog.id,{
                method:'DELETE'
            }).then(
                navigate('/')
            )
        }
        return (
            <>
            {error && <p>{error}</p>}
            {load && <p>Loading...</p>}
            {blog && (
                <div>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>

                    <button onClick={handleClick}>Delete</button>
                </div>
            ) }
           
            </>
        
        );
    }
    
    export default BlogDetails;